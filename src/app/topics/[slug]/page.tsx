import PostCreateForm from "@/components/posts/PostCreateForm";
import PostList from "@/components/posts/PostList";
import { fetchPostByTopicSlug } from "@/lib/query/post";
import React from "react";

type TopicShowPageParams = {
    params: Promise<{ slug: string }>;
};

const ShowTopicPage: React.FC<TopicShowPageParams> = async ({ params }) => {
    const slug = (await params).slug;

    return (
        <div className="flex justify-center min-h-screen bg-gray-50 px-4 py-10">
            <div className="w-full max-w-5xl bg-white border border-gray-200 rounded-lg shadow-sm p-6 flex flex-col md:flex-row gap-6">
                
                {/* Left Column - Post List */}
                <div className="md:w-2/3 w-full border-b md:border-b-0 md:border-r pb-6 md:pb-0 md:pr-6">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Discussions</h2>
                    <PostList fetchData = {() => fetchPostByTopicSlug(slug)} />
                </div>

                {/* Right Column - Topic Details & Create Post */}
                <div className="md:w-1/3 w-full">
                    <h1 className="text-3xl font-bold text-gray-900 capitalize">{slug}</h1>
                    <p className="text-gray-600 mt-2">
                        Join discussions about <span className="font-semibold">{slug}</span>. 
                        Share your insights and start conversations.
                    </p>

                    {/* Create Post Form */}
                    <div className="mt-6">
                        <PostCreateForm slug={slug} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowTopicPage;
