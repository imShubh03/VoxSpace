import CreateTopicForm from "@/components/topic/CreateTopicForm";

export default function Home() {
  return (
    <div className="grid grid-cols-5 gap-4 p-6">
      <div className="col-span-3">
        <h2 className="text-xl font-semibold">Home Page</h2>
      </div>
      <div className="col-span-2 flex justify-end">
        <CreateTopicForm />
      </div>
    </div>
  );
}
