import { takeLatest } from 'redux-saga/effects';
import ACTION_TYPES from '../actions/types';
import { createTaskSaga, getTasksSaga, removeTaskSaga } from './tasksSagas';

function * rootSaga () {
  yield takeLatest(ACTION_TYPES.CREATE_TASK, createTaskSaga);
  yield takeLatest(ACTION_TYPES.GET_TASKS, getTasksSaga);
  yield takeLatest(ACTION_TYPES.REMOVE_TASK, removeTaskSaga)
}
export default rootSaga;
