import axios from "axios";

const API_URL = "http://localhost:5000/tasks";

export const fetchTasks = () => axios.get(API_URL).then((res) => res.data);
export const addTask = (task) => axios.post(API_URL, task);
export const updateTask = (id, task) => axios.put(`${API_URL}/${id}`, task);
export const deleteTask = (id) => axios.delete(`${API_URL}/${id}`);
