import { useTasks } from "../hooks/useTasks";
import { useState } from "react";

const TaskItem = ({ task }) => {
  const { updateMutation, deleteMutation } = useTasks();
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);

  const handleUpdate = () => {
    updateMutation.mutate({ id: task._id, task: { ...task, title } });
    setIsEditing(false);
  };

  return (
    <div className="bg-gray-100 p-3 rounded shadow-sm flex justify-between items-center">
      {isEditing ? (
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-1 w-full"
        />
      ) : (
        <span>{task.title}</span>
      )}
      <div className="flex gap-2">
        {isEditing ? (
          <button
            className="bg-green-500 text-white px-2"
            onClick={handleUpdate}
          >
            Save
          </button>
        ) : (
          <button
            className="bg-yellow-500 text-white px-2"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
        )}
        <button
          className="bg-red-500 text-white px-2"
          onClick={() => deleteMutation.mutate(task._id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
