import { useState } from "react";
import { useTasks } from "../hooks/useTasks";

const TaskForm = () => {
  const [title, setTitle] = useState("");
  const { addMutation } = useTasks();

  const handleSubmit = (e) => {
    e.preventDefault();
    addMutation.mutate({ title, category: "To-Do" });
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        className="border p-2"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="New task"
        required
      />
      <button className="bg-blue-500 text-white p-2">Add</button>
    </form>
  );
};

export default TaskForm;
