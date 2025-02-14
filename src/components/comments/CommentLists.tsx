import React from 'react'
import ShowComments from './ShowComments'
import { fetchCommentByPostId } from '@/lib/query/comments'

type CommentListProps = {
    postId: string,

}

const CommentLists: React.FC<CommentListProps> = async ({ postId }) => {

    const comments = await fetchCommentByPostId(postId);

    const topLevelComments = comments.filter((comment) => comment.parentId == null);

    return (
        <div className=' max-w-3xl mt-6 mx-auto p-6 bg-white shadow-md rounded-lg border border-gray-200' >
            <h1>all 3  comments</h1>
            {
                topLevelComments.map((comment) => (
                    <ShowComments key={comment.id} postId={comment.postId} commentId={comment.id} />
                ))
            }
        </div>
    )
}

export default CommentLists