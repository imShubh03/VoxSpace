import { prisma } from ".."
import type { Comment } from "@prisma/client"

export type commentWithAuthor = Comment & {
    user:{
        name:string | null
        image: string | null
    }
}

export const fetchCommentByPostId = async (postId: string) : Promise<commentWithAuthor[]> => {
    return prisma.comment.findMany({
        where: {
            postId
        },
        include: {
            user: {
                select: {
                    name: true,
                    image: true
                }
            }
        }
    })
}