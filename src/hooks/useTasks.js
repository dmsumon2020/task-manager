import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const API_URL = "http://localhost:5000/api/tasks"; // Make sure this is correct

export const useTasks = () => {
  const queryClient = useQueryClient();

  // Fetch tasks from the server
  const {
    data: tasks = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const res = await axios.get(API_URL);
      return res.data;
    },
  });

  // Add new task
  const addMutation = useMutation({
    mutationFn: async (newTask) => {
      const res = await axios.post(API_URL, newTask);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["tasks"]); // Refresh task list
    },
  });

  // Edit existing task
  const updateMutation = useMutation({
    mutationFn: async ({ id, task }) => {
      const res = await axios.put(`${API_URL}/${id}`, task);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["tasks"]); // Refresh task list
    },
  });

  // Delete task
  const deleteMutation = useMutation({
    mutationFn: async (id) => {
      await axios.delete(`${API_URL}/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["tasks"]); // Refresh task list
    },
  });

  return {
    tasks,
    isLoading,
    isError,
    addMutation,
    updateMutation,
    deleteMutation,
  };
};
