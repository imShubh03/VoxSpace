import PostList from "@/components/posts/PostList";
import CreateTopicForm from "@/components/topic/CreateTopicForm";
import { fetchTopPosts } from "@/lib/query/post";

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 p-6">
      {/* Left Section - Posts */}
      <div className="md:col-span-2 lg:col-span-3 space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">Top Posts</h2>
        <PostList fetchData={fetchTopPosts} />
      </div>

      {/* Right Section - Create Topic Form */}
      <div className="md:col-span-1 lg:col-span-2 flex flex-col items-center lg:items-start">
        <div className="w-full max-w-sm bg-white shadow-lg rounded-lg p-6 border border-gray-200">
          <h3 className="text-lg font-semibold mb-4 text-gray-900">
            Start a Discussion
          </h3>
          <CreateTopicForm />
        </div>
      </div>
    </div>
  );
}
