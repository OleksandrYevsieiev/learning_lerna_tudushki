import { takeLatest } from 'redux-saga/effects';
import ACTION_TYPES from '../actions/types';
import { createTaskSaga, getTasksSaga } from './tasksSagas';

function * rootSaga () {
  yield takeLatest(ACTION_TYPES.CREATE_TASK, createTaskSaga);
  yield takeLatest(ACTION_TYPES.GET_TASKS, getTasksSaga);
}
export default rootSaga;
