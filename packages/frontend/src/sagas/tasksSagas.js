import { put } from 'redux-saga/effects';
import {
  createTaskRequest,
  createTaskSuccess,
  createTaskError,
  getTasksRequest,
  getTasksSuccess,
  getTasksError,
  removeTaskRequest,
  removeTaskSuccess,
  removeTaskError
} from '../actions/todoActionCreators';
import * as API from './../api';

export function * createTaskSaga ({ data }) {
  yield put(createTaskRequest());

  try {
    const {
      data: { data: task }
    } = yield API.createTask(data);
    yield put(createTaskSuccess(task));
  } catch (error) {
    yield put(createTaskError(error));
  }
}

export function * getTasksSaga (action) {
  const { params } = action;
  yield put(getTasksRequest());

  try {
    const {
      data: { data: tasks }
    } = yield API.getTasks(params);
    yield put(getTasksSuccess(tasks));
  } catch (error) {
    yield put(getTasksError(error));
  }
}

export function * removeTaskSaga(action){
  const { id } = action;
  yield put(removeTaskRequest());

  try {
     const {
      data: { data: task }
    } = yield API.removeTask(id);
    yield put(removeTaskSuccess(task));
  }
  catch(error) {
    yield put(removeTaskError(error));
  }

}