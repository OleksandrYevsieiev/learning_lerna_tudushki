import { applyMiddleware, createStore } from 'redux';

import rootReducer from './../reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const rootMiddleware = applyMiddleware(sagaMiddleware);

const store = createStore(rootReducer, rootMiddleware);

sagaMiddleware.run(rootSaga);

export default store;
