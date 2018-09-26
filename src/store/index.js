import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const middlewares = [];

// 本番環境ではredux-loggerを非表示
if (process.env.NODE_ENV !== 'production') {
  middlewares.push(logger);
}

// thunkの処理をlogに表示させるため、
// loggerの後にthunkをpush
middlewares.push(thunk);

// Redux DevToolsの設定
const composeEnhancers = process.env.NODE_ENV === 'production'
  ? compose
  : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line

const store = createStore(
  rootReducer,
  /* preloadedState, */
  composeEnhancers(
    applyMiddleware(...middlewares),
  ),
);

export default store;
