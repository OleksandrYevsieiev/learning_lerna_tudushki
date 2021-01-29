import axios from 'axios';

const apiInstance = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export const createTask = (data) => apiInstance.post('/tasks', data);
// пагинация захардкожена
export const getTasks = () => apiInstance.get('/tasks?page=2&item_on_page=5');
