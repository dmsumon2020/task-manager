import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

//const API_URL = "http://localhost:5000/api/tasks";
const API_URL = "http://localhost:5000/tasks";

export const useTasks = () => {
  const queryClient = useQueryClient();

  // Fetch tasks
  const {
    data: tasks,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const response = await axios.get(API_URL);
      return response.data;
    },
  });

  // Add Task Mutation
  const addMutation = useMutation({
    mutationFn: async (newTask) => {
      const response = await axios.post(API_URL, newTask);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["tasks"]);
    },
  });

  // Update Task Mutation
  const updateMutation = useMutation({
    mutationFn: async ({ id, task }) => {
      const response = await axios.put(`${API_URL}/${id}`, task);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["tasks"]);
    },
  });

  // Delete Task Mutation
  const deleteMutation = useMutation({
    mutationFn: async (id) => {
      await axios.delete(`${API_URL}/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["tasks"]);
    },
  });

  return {
    tasks,
    error,
    isLoading,
    addMutation,
    updateMutation,
    deleteMutation,
  };
};
