import ACTION_TYPES from '../actions/types';

const initialState = {
  tasks: [],
  isFetching: false,
  error: null
};

const todoReducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case ACTION_TYPES.CREATE_TASK_REQUEST:
    case ACTION_TYPES.GET_TASKS_REQUEST: {
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
    case ACTION_TYPES.GET_TASKS_ERROR:
    case ACTION_TYPES.CREATE_TASK_ERROR: {
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
