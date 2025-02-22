import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./pages/Home";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="bg-gray-200 min-h-screen p-4">
        <Home />
      </div>
    </QueryClientProvider>
  );
};

export default App;
