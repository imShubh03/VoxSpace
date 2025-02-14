import { fetchCommentByPostId } from '@/lib/query/comments';
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import CreateCommentForm from './CreateCommentForm';

type CommentShowProps = {
    postId: string;
    commentId: string;
};

const ShowComments: React.FC<CommentShowProps> = async ({ postId, commentId }) => {
    const comments = await fetchCommentByPostId(postId);
    const comment = comments.find((c) => c.id === commentId);

    if (!comment) {
        return null;
    }

    const childrenComments = comments.filter((c) => c.parentId === commentId);

    return (
        <div className="max-w-3xl mx-auto p-4 bg-white shadow-sm border border-gray-200 rounded-lg mt-4">
            <div className="flex items-center gap-3">
                <Avatar className="w-10 h-10">
                    <AvatarImage src={comment.user.image || undefined} alt={comment.user.name || undefined} />
                    <AvatarFallback>{comment.user.name?.slice(0, 2).toUpperCase() || 'CN'}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                    <p className="font-semibold text-gray-900">{comment.user.name}</p>
                    <p className="text-gray-700 text-sm">{comment.content}</p>
                    <CreateCommentForm postId={comment.postId} parentId={comment.id}/>
                </div>
            </div>

            {/* Render child comments with indentation */}
            {childrenComments.length > 0 && (
                <div className="ml-6 border-l-2 border-gray-200 pl-4 mt-3">
                    {childrenComments.map((childComment) => (
                        <ShowComments key={childComment.id} postId={postId} commentId={childComment.id} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default ShowComments;
