import {put} from 'redux-saga/effects';
import {
  createHeroError,
  createHeroRequest,
  createHeroSuccess,
  getHeroesError,
  getHeroesRequest,
  getHeroesSuccess,
} from '../actions/heroesActionsCreators';
import * as API from './../api';

export function* createHeroSaga({data}) {
  yield put(createHeroRequest());

  try {
    const {
      data: {data: hero},
    } = yield API.createHero(data);
    yield put(createHeroSuccess(hero));
  } catch (error) {
    yield put(createHeroError(error));
  }
}

export function* getHeroesSaga() {
  yield put(getHeroesRequest());

  try {
    const {
      data: {data: heroes},
    } = yield API.getHeroes();
    yield put(getHeroesSuccess(heroes));
  } catch (error) {
    yield put(getHeroesError(error));
  }
}
