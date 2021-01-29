import { put } from 'redux-saga/effects';
import {
  createTaskRequest,
  createTaskSuccess,
  createTaskError,
  getTasksRequest,
  getTasksSuccess,
  getTasksError,
} from '../actions/todoActionCreators';
import * as API from './../api';

export function* createTaskSaga({ data }) {
  yield put(createTaskRequest());

  try {
    const {
      data: { data: hero },
    } = yield API.createTask(data);
    yield put(createTaskSuccess(hero));
  } catch (error) {
    yield put(createTaskError(error));
  }
}

export function* getTasksSaga() {
  yield put(getTasksRequest());

  try {
    const {
      data: { data: heroes },
    } = yield API.getTasks();
    yield put(getTasksSuccess(heroes));
  } catch (error) {
    yield put(getTasksError(error));
  }
}
