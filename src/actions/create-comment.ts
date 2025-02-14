'use server';
import { auth } from '@/auth';
import { prisma } from '@/lib';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';

// Validation schema for comments
const createCommentSchema = z.object({
    content: z.string().min(3, { message: 'Comment must be at least 3 characters long' }),
});

// Define the state structure for error handling
type CreateCommentState = {
    errors: {
        content?: string[];
        formError?: string[];
    };
};

export const createComment = async (
    { postId, parentId }: { postId: string; parentId?: string },
    prevState: CreateCommentState,
    formData: FormData
): Promise<CreateCommentState> => {

    // Validate the comment input
    const result = createCommentSchema.safeParse({
        content: formData.get('content'),
    });

    if (!result.success) {
        return {
            errors: result.error.flatten().fieldErrors,
        };
    }

    // Authenticate user
    const session = await auth();

    if (!session || !session.user || !session.user.id) {
        return {
            errors: {
                formError: ['You must be logged in to comment.'],
            },
        };
    }

    try {
        // Create the comment in the database
        await prisma.comment.create({
            data: {
                content: result.data.content,
                postId: postId,
                userId: session.user.id,
                parentId: parentId ?? null, // Handle parentId properly
            },
        });

    } catch (error) {
        if (error instanceof Error) {
            return {
                errors: {
                    formError: [error.message],
                },
            };
        } else {
            return {
                errors: {
                    formError: ['Failed to post comment.'],
                },
            };
        }
    }

    // Find the topic associated with the post
    const topic = await prisma.topic.findFirst({
        where: {
            posts: {
                some: { id: postId },
            },
        },
    });

    if (!topic) {
        return {
            errors: {
                formError: ['Failed to revalidate path'],
            },
        };
    }

    // Revalidate the post page
    revalidatePath(`/topics/${topic.slug}/posts/${postId}`);

    return { errors: {} }; // Return an empty errors object if successful
};
