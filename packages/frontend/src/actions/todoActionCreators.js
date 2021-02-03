import ACTION_TYPES from './types';

export const createTask = (values) => ({
  type: ACTION_TYPES.CREATE_TASK,
  values
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

export const getTasks = () => ({
  type: ACTION_TYPES.GET_TASKS
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

export const updateTask = (value, taskIndex) => ({
  type: ACTION_TYPES.UPDATE_TASK,
  taskIndex,
  value
});

export const removeTask = (taskIndex) => ({
  type: ACTION_TYPES.REMOVE_TASK,
  taskIndex
});
