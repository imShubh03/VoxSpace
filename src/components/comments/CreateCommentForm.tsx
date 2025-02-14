'use client';

import React, { useState, useActionState } from 'react';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';
import { createComment } from '@/actions/create-comment';

type CommentCreateFormProps = {
    postId: string;
    parentId?: string;
    startOpen?: boolean;
};

const CreateCommentForm: React.FC<CommentCreateFormProps> = ({ postId, parentId, startOpen }) => {
    const [open, setOpen] = useState(startOpen ?? false);

    const [formState, action, isPending] = useActionState(
        createComment.bind(null, { postId, parentId }),
        { errors: {} }
    );

    return (
        <div className="max-w-3xl mt-6 mx-auto p-6 bg-white shadow-md rounded-lg border border-gray-200">
            <Button onClick={() => setOpen(!open)} variant="link" className="text-blue-600 font-semibold">
                Reply
            </Button>

            {open && (
                <form action={action} className="mt-2">
                    <Textarea
                        name="content"
                        placeholder="Write your comment here..."
                        className="w-full border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    />
                    {formState.errors.content && (
                        <p className="text-red-500 text-sm mt-1">{formState.errors.content.join(', ')}</p>
                    )}
                    <Button size="sm" type="submit" className="mt-2" disabled={isPending}>
                        {isPending ? 'Posting...' : 'Post Comment'}
                    </Button>
                </form>
            )}
        </div>
    );
};

export default CreateCommentForm;
