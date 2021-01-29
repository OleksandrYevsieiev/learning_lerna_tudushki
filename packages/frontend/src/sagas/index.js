import { takeLatest } from 'redux-saga/effects';
import ACTION_TYPES from '../actions/types';
import { createTaskSaga, getTasksSaga } from './tasksSagas';

function* rootSaga() {
  yield takeLatest(ACTION_TYPES.CREATE_HERO, createTaskSaga);
  yield takeLatest(ACTION_TYPES.GET_HEROES, getTasksSaga);
}
export default rootSaga;
