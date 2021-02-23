import ACTION_TYPES from '../actions/types';

const initialState = {
  tasks: [],
  isFetching: false,
  error: null
};

const todoReducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case ACTION_TYPES.CREATE_TASK_ACTION:
    case ACTION_TYPES.GET_TASKS_ACTION:
    case ACTION_TYPES.REMOVE_TASK_ACTION:{
      return {
        ...state,
        isFetching: true,
        error: false
      };
    }

    case ACTION_TYPES.CREATE_TASK_SUCCESS: {
      const { task } = action;
      const { tasks } = state;
      return {
        ...state,
        tasks: [...tasks, task],
        isFetching: false,
        error: false
      };
    }

    case ACTION_TYPES.GET_TASKS_SUCCESS: {
    const { tasks } = action;
    return {
      ...state,
      tasks,
      isFetching: false,
      error: false
      };
    }

    case ACTION_TYPES.REMOVE_TASK_SUCCESS: {
      const { payload: { id } } = action;
      const { tasks } = state;
      const tasksRemained = tasks.filter((task)=> task.id !== +id);
      return {
        ...state,
        tasks:  tasksRemained,
        isFetching: false,
        error: false
      };
    }

    case ACTION_TYPES.GET_TASKS_ERROR:
    case ACTION_TYPES.CREATE_TASK_ERROR:
    case ACTION_TYPES.REMOVE_TASK_ERROR: {
      const { error } = action;
      return {
        ...state,
        isFetching: false,
        error
      };
    }
    default: {
      return state;
    }
  }
};

export default todoReducer;
