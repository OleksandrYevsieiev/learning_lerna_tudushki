import ACTION_TYPES from './types';

export const createTaskRequest = () => ({
  type: ACTION_TYPES.CREATE_TASK_REQUEST,
});

export const createTaskSuccess = (Task) => ({
  type: ACTION_TYPES.CREATE_TASK_SUCCESS,
  Task,
});

export const createTaskError = (error) => ({
  type: ACTION_TYPES.CREATE_TASK_ERROR,
  error,
});

export const getTasksRequest = () => ({
  type: ACTION_TYPES.GET_TASKS_REQUEST,
});

export const getTasksSuccess = (Tasks) => ({
  type: ACTION_TYPES.GET_TASKS_SUCCESS,
  Taskes,
});

export const getTasksError = (error) => ({
  type: ACTION_TYPES.GET_TASKS_ERROR,
  error,
});
