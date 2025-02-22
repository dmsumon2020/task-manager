import { useTasks } from "../hooks/useTasks";
import { useState } from "react";
import { DndContext, closestCorners } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import TaskItem from "./TaskItem";

const DragDropContext = ({ category }) => {
  const { tasks, updateMutation } = useTasks();
  const [items, setItems] = useState(
    tasks?.filter((task) => task.category === category) || []
  );

  const onDragEnd = (event) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      const updatedTasks = [...items];
      const oldIndex = updatedTasks.findIndex((t) => t._id === active.id);
      const newIndex = updatedTasks.findIndex((t) => t._id === over.id);
      const [movedItem] = updatedTasks.splice(oldIndex, 1);
      updatedTasks.splice(newIndex, 0, movedItem);

      setItems(updatedTasks);
      updateMutation.mutate({
        id: movedItem._id,
        task: { ...movedItem, category },
      });
    }
  };

  return (
    <DndContext collisionDetection={closestCorners} onDragEnd={onDragEnd}>
      <SortableContext items={items} strategy={verticalListSortingStrategy}>
        {items.map((task) => (
          <TaskItem key={task._id} task={task} />
        ))}
      </SortableContext>
    </DndContext>
  );
};

export default DragDropContext;
