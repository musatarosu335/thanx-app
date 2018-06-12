import { combineReducers } from 'redux';
import login from './login';

const indexReducer = combineReducers({
  login,
});

export default indexReducer;
