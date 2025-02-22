import { DndContext, closestCorners } from "@dnd-kit/core";
import { SortableContext, arrayMove } from "@dnd-kit/sortable";
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

    if (!draggedTask) return;

    // Determine the new category
    let newCategory = draggedTask.category;
    if (targetTask) {
      newCategory = targetTask.category;
    } else {
      // If dropped in an empty category, determine from the droppable container
      const newContainer = over?.id;
      if (["To-Do", "In Progress", "Done"].includes(newContainer)) {
        newCategory = newContainer;
      }
    }

    // If category changed, update task category
    if (draggedTask.category !== newCategory) {
      updateMutation.mutate({
        id: draggedTask._id,
        task: { ...draggedTask, category: newCategory, position: 0 }, // Reset position
      });
    } else {
      // Reorder within the same category
      const sameCategoryTasks = tasks
        .filter((task) => task.category === draggedTask.category)
        .sort((a, b) => a.position - b.position);

      const oldIndex = sameCategoryTasks.findIndex(
        (task) => task._id === active.id
      );
      const newIndex = sameCategoryTasks.findIndex(
        (task) => task._id === over.id
      );

      const reorderedTasks = arrayMove(sameCategoryTasks, oldIndex, newIndex);

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
