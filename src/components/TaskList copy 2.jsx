import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import TaskItem from "./TaskItem";
import { useTasks } from "../hooks/useTasks";

const TaskList = ({ category }) => {
  const { tasks } = useTasks();
  const categoryTasks =
    tasks?.filter((task) => task.category === category) || [];

  return (
    <SortableContext
      items={categoryTasks.map((task) => task._id)}
      strategy={verticalListSortingStrategy}
    >
      <div className="bg-white p-4 rounded shadow-md w-full md:w-1/3">
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
