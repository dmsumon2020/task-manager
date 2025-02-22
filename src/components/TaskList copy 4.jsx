import { useDroppable } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import TaskItem from "./TaskItem";
import { useTasks } from "../hooks/useTasks";

const TaskList = ({ category }) => {
  const { tasks } = useTasks();
  const categoryTasks =
    tasks
      ?.filter((task) => task.category === category)
      .sort((a, b) => a.position - b.position) || [];

  // Make each category column droppable
  const { setNodeRef } = useDroppable({ id: category });

  return (
    <SortableContext
      items={categoryTasks.map((task) => task._id)}
      strategy={verticalListSortingStrategy}
    >
      <div
        ref={setNodeRef}
        className="bg-white p-4 rounded shadow-md w-full md:w-1/3 min-h-[200px]"
      >
        <h2 className="text-xl font-bold mb-3">{category}</h2>
        <div className="space-y-2">
          {categoryTasks.map((task) => (
            <TaskItem key={task._id} task={task} />
          ))}
        </div>
      </div>
    </SortableContext>
  );
};

export default TaskList;
