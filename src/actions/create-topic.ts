'use server'
import { auth } from '@/auth';
import { prisma } from '@/lib';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';

const createTopicSchema = z.object({
    name: z.string().min(3).regex(/^[a-z-]+$/, { message: "must be lowercase without space" }),
    description: z.string().min(5)
});

type CreateFormTopicState = {
    success?: boolean;
    redirectUrl?: string;
    errors: {
        name?: string[],
        description?: string[],
        formError?: string[]
    }
};

export const createTopics = async (prevState: CreateFormTopicState, formData: FormData): Promise<CreateFormTopicState> => {
    const result = createTopicSchema.safeParse({
        name: formData.get('name'),
        description: formData.get('description')
    });

    if (!result.success) {
        return {
            errors: result.error.flatten().fieldErrors
        };
    }

    const session = await auth();
    if (!session || !session.user) {
        return {
            errors: {
                formError: ['You must login first']
            }
        };
    }

    try {
        const topic = await prisma.topic.create({
            data: {
                slug: result.data.name,
                description: result.data.description
            }
        });

        revalidatePath("/");
        return { success: true, redirectUrl: `/topics/${topic.slug}`, errors: {} };

    } catch (error) {
        return {
            errors: {
                formError: ['Something went wrong, please try again.']
            }
        };
    }
};
