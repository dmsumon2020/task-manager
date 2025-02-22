import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useTasks } from "../hooks/useTasks";
import { useState } from "react";

const TaskItem = ({ task }) => {
  const { updateMutation, deleteMutation } = useTasks();
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);

  // DND-Kit Sorting Hook
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: task._id,
    });

  // Apply DND styles
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  // Handle updating a task
  const handleUpdate = () => {
    if (!title.trim()) return alert("Title is required!");

    updateMutation.mutate({
      id: task._id,
      task: { ...task, title },
    });

    setIsEditing(false);
  };

  // Handle deleting a task
  const handleDelete = () => {
    if (confirm("Are you sure you want to delete this task?")) {
      deleteMutation.mutate(task._id);
    }
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="bg-gray-100 p-3 rounded shadow-sm flex justify-between items-center cursor-grab"
      {...attributes}
    >
      <div className="flex-1" {...listeners}>
        {" "}
        {/* Dragging only works on this section */}
        {isEditing ? (
          <>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border p-1 w-full mb-1"
            />
          </>
        ) : (
          <>
            <h3 className="font-bold">{task.title}</h3>
          </>
        )}
      </div>
      <div className="flex gap-2">
        {isEditing ? (
          <button
            className="bg-green-500 text-white px-2 py-1 rounded"
            onClick={handleUpdate}
          >
            Save
          </button>
        ) : (
          <button
            className="bg-yellow-500 text-white px-2 py-1 rounded"
            onClick={(e) => {
              e.stopPropagation(); // Prevent drag interference
              setIsEditing(true);
            }}
          >
            Edit
          </button>
        )}
        <button
          className="bg-red-500 text-white px-2 py-1 rounded"
          onClick={(e) => {
            e.stopPropagation(); // Prevent drag interference
            handleDelete();
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
