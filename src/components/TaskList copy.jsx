import TaskItem from "./TaskItem";
import { useTasks } from "../hooks/useTasks";

const TaskList = ({ category }) => {
  const { tasks } = useTasks();

  return (
    <div className="bg-white p-4 rounded shadow-md w-full md:w-1/3">
      <h2 className="text-xl font-bold mb-3">{category}</h2>
      <div className="space-y-2">
        {tasks
          ?.filter((task) => task.category === category)
          .map((task) => (
            <TaskItem key={task._id} task={task} />
          ))}
      </div>
    </div>
  );
};

export default TaskList;
