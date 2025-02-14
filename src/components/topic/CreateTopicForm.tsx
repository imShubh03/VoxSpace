import React from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

const CreateTopicForm = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" className="px-4 py-2 text-sm">Create a Topic</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md p-6">
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
                    </div>
                    <div className="flex flex-col">
                        <Label htmlFor="description" className="mb-1 text-sm font-medium">Description</Label>
                        <Textarea id="description" name="description" placeholder="Write something..." className="w-full" />
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">Save Topic</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default CreateTopicForm;
