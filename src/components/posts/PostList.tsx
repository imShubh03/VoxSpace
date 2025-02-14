import React from 'react';
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { PostWithData } from '@/lib/query/post';

type PostListProps = {
    fetchData: () => Promise<PostWithData[]>
}

const PostList: React.FC<PostListProps> = async ({ fetchData }) => {

    const posts = await fetchData();
    console.log(posts);


    return (
        <div className="space-y-4">
            {
                posts.map((post) => (
                    <Card key={post.id} className="p-4 border border-gray-200 shadow-sm hover:shadow-md transition">
                        <CardHeader>
                            <CardTitle className="text-lg font-semibold">{post.title}</CardTitle>
                        </CardHeader>
                        <CardDescription className="flex items-center justify-between text-gray-700">
                            <p className="text-sm font-medium">
                                By {post.user?.name}
                            </p>
                            <span className="text-xs text-gray-500">💬 {post._count.comments} Comments</span>
                        </CardDescription>
                    </Card>
                ))
            }
        </div>
    );
};

export default PostList;
