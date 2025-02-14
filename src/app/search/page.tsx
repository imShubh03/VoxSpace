import PostList from '@/components/posts/PostList';
import { fetchPostBySearch } from '@/lib/query/post';
import React from 'react';

type SearchPageProps = {
    searchParams: { term?: string };  // Updated to be directly an object, not a Promise
};

const SearchPage: React.FC<SearchPageProps> = async ({ searchParams }) => {
    const term = searchParams.term || "";  // Default to empty string if undefined

    return (
        <div>
            <h1 className="text-blue-500 font-medium">Search results for "{term}"</h1>
            <PostList fetchData={() => fetchPostBySearch(term)} />
        </div>
    );
};

export default SearchPage;
