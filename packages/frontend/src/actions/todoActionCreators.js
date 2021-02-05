import ACTION_TYPES from './types';

export const createTask = (data) => ({
  type: ACTION_TYPES.CREATE_TASK,
  data
});

export const createTaskRequest = () => ({
  type: ACTION_TYPES.CREATE_TASK_REQUEST
});

export const createTaskSuccess = (task) => ({
  type: ACTION_TYPES.CREATE_TASK_SUCCESS,
  task
});

export const createTaskError = (error) => ({
  type: ACTION_TYPES.CREATE_TASK_ERROR,
  error
});

export const getTasks = (params) => ({
  type: ACTION_TYPES.GET_TASKS,
  params
});

export const getTasksRequest = () => ({
  type: ACTION_TYPES.GET_TASKS_REQUEST
});

export const getTasksSuccess = (tasks) => ({
  type: ACTION_TYPES.GET_TASKS_SUCCESS,
  tasks
});

export const getTasksError = (error) => ({
  type: ACTION_TYPES.GET_TASKS_ERROR,
  error
});




// ---------------------------------------------

export const removeTask = (id) => ({
  type: ACTION_TYPES.REMOVE_TASK,
  id
});

export const removeTaskRequest = () => ({
  type: ACTION_TYPES.REMOVE_TASK_REQUEST
});

export const removeTaskSuccess = (task) => ({
  type: ACTION_TYPES.REMOVE_TASK_SUCCESS,
  task
});

export const removeTaskError = (error) => ({
  type: ACTION_TYPES.REMOVE_TASK_ERROR,
  error
});