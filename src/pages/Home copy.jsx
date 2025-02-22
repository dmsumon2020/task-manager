import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

const Home = () => {
  return (
    <div className="max-w-4xl mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-6">Task Manager</h1>
      <TaskForm />
      <div className="flex flex-col md:flex-row gap-4 mt-6">
        <TaskList category="To-Do" />
        <TaskList category="In Progress" />
        <TaskList category="Done" />
      </div>
    </div>
  );
};

export default Home;
