
import CommentLists from '@/components/comments/CommentLists';
import CreateCommentForm from '@/components/comments/CreateCommentForm';
import PostShow from '@/components/posts/PostShow';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

type ShowPostPageProps = {
    params: Promise<{ slug: string; postId: string }>
}

const ShowPostPage: React.FC<ShowPostPageProps> = async ({ params }) => {
    const { slug, postId } = (await params);
    return (
        <div className=' space-y-3'>
            <Link href={`/topics/${slug}`} >
                <Button variant={'link'}>
                    <ChevronLeft />
                    Back to {slug}
                </Button>
            </Link>
            <PostShow postId={postId} />
            <CreateCommentForm postId={postId} />
            <CommentLists  postId={postId} />
        </div>
    )
}

export default ShowPostPage;