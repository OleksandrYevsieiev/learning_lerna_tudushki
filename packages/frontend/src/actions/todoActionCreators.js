import ACTION_TYPES from './types';

export const createTaskAction = (data) => ({
  type: ACTION_TYPES.CREATE_TASK_ACTION,
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

export const getTasksAction = () => ({
  type: ACTION_TYPES.GET_TASKS_ACTION
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

export const removeTaskAction = (id) => ({
  type: ACTION_TYPES.REMOVE_TASK_ACTION,
  payload: { id }
});

export const removeTaskSuccess = (id) => ({
  type: ACTION_TYPES.REMOVE_TASK_SUCCESS,
  payload: { id }
});

export const removeTaskError = (error) => ({
  type: ACTION_TYPES.REMOVE_TASK_ERROR,
  payload: { error }
});