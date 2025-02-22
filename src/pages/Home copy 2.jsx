import { DndContext, closestCorners } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import { useTasks } from "../hooks/useTasks";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

const Home = () => {
  const { tasks, updateMutation } = useTasks();

  const onDragEnd = (event) => {
    const { active, over } = event;

    if (!over) return;

    const draggedTask = tasks.find((task) => task._id === active.id);
    const targetTask = tasks.find((task) => task._id === over.id);

    if (draggedTask.category !== targetTask.category) {
      updateMutation.mutate({
        id: draggedTask._id,
        task: { ...draggedTask, category: targetTask.category },
      });
    } else {
      const oldIndex = tasks.findIndex((task) => task._id === active.id);
      const newIndex = tasks.findIndex((task) => task._id === over.id);
      const reorderedTasks = arrayMove(tasks, oldIndex, newIndex);

      reorderedTasks.forEach((task, index) => {
        updateMutation.mutate({
          id: task._id,
          task: { ...task, position: index },
        });
      });
    }
  };

  return (
    <DndContext collisionDetection={closestCorners} onDragEnd={onDragEnd}>
      <div className="max-w-4xl mx-auto py-10">
        <h1 className="text-3xl font-bold text-center mb-6">Task Manager</h1>
        <TaskForm />
        <div className="flex flex-col md:flex-row gap-4 mt-6">
          <TaskList category="To-Do" />
          <TaskList category="In Progress" />
          <TaskList category="Done" />
        </div>
      </div>
    </DndContext>
  );
};

export default Home;
