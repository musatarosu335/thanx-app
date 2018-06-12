import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import indexReducer from '../reducers';

const middlewares = [];

// 本番環境ではredux-loggerを非表示
if (process.env.NODE_ENV !== 'production') {
  middlewares.push(logger);
}

// thunkの処理をlogに表示させるため、
// loggerの後にthunkをpush
middlewares.push(thunk);

const store = createStore(
  indexReducer,
  applyMiddleware(...middlewares),
);

export default store;
