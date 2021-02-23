import { takeLatest } from 'redux-saga/effects';
import ACTION_TYPES from '../actions/types';
import { createTaskSaga, getTasksSaga, removeTaskSaga } from './tasksSagas';

function * rootSaga () {
  yield takeLatest(ACTION_TYPES.CREATE_TASK_ACTION, createTaskSaga);
  yield takeLatest(ACTION_TYPES.GET_TASKS_ACTION, getTasksSaga);
  yield takeLatest(ACTION_TYPES.REMOVE_TASK_ACTION, removeTaskSaga)
}
export default rootSaga;
