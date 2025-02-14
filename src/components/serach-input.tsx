'use client';
import React from 'react';
import { Input } from './ui/input';
import { search } from '@/actions/search-text';
import { useSearchParams } from 'next/navigation';

function SearchInput() {
    const searchParams = useSearchParams();

    return (
        <div>
            <form action={search}>
                <Input 
                    defaultValue={searchParams.get("term") || ""} 
                    type="text" 
                    name="term" 
                    placeholder="Search posts" 
                    className="pl-8 w-[300px]" 
                />
            </form>
        </div>
    );
}

export default SearchInput;
