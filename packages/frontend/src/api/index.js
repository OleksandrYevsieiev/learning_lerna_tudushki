import axios from 'axios';

const apiInstance = axios.create({
  baseURL: 'http://localhost:5000/api'
});

export const createTask = (data) => apiInstance.post('/tasks', data);

export const getTasks = (params) => apiInstance.get(`/tasks?page=${params.page}&results=${params.results}`);

export const removeTask = (id) => apiInstance.delete(`/tasks/${id}`);