import { prisma } from '@/lib';
import { notFound } from 'next/navigation';
import React from 'react';

type ShowPostProps = {
    postId: string;
};

const PostShow: React.FC<ShowPostProps> = async ({ postId }) => {
    const post = await prisma.post.findFirst({
        where: {
            id: postId
        }
    });

    if (!post) {
        notFound();
    }

    return (
        <div className=" space-y-2 max-w-3xl mt-6 mx-auto p-6 bg-white shadow-md rounded-lg border border-gray-200">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{post.title}</h1>
            <p className="text-gray-700 text-lg">{post.content}</p>
        </div>
    );
};

export default PostShow;
