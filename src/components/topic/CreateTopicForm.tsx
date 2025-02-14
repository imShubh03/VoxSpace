"use client";
import React, { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { createTopics } from "@/actions/create-topic";

const CreateTopicForm = () => {
    const router = useRouter();
    const [formState, action] = useActionState(createTopics, { errors: {} });

    useEffect(() => {
        if (formState.success && formState.redirectUrl) {
            router.push(formState.redirectUrl);
        }
    }, [formState, router]);

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" className="px-4 py-2 text-sm">Create a Topic</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md p-6">
                <form action={action}>
                    <DialogHeader>
                        <DialogTitle className="text-lg font-medium">Create New Topic</DialogTitle>
                        <DialogDescription className="text-sm text-gray-500">
                            Let's start a discussion with a coffee ☕
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-2">
                        <div className="flex flex-col">
                            <Label htmlFor="name" className="mb-1 text-sm font-medium">Name</Label>
                            <Input id="name" name="name" placeholder="Enter topic name" className="w-full" />
                            {formState.errors?.name && <p className="text-red-500 text-sm">{formState.errors.name}</p>}
                        </div>
                        <div className="flex flex-col">
                            <Label htmlFor="description" className="mb-1 text-sm font-medium">Description</Label>
                            <Textarea id="description" name="description" placeholder="Write something..." className="w-full" />
                            {formState.errors?.description && <p className="text-red-500 text-sm">{formState.errors.description}</p>}
                        </div>
                        {formState.errors?.formError && <p className="text-red-500 text-sm">{formState.errors.formError}</p>}
                    </div>
                    <DialogFooter>
                        <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">Save Topic</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default CreateTopicForm;
