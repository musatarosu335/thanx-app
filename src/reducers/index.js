import { combineReducers } from 'redux';
import login from './login';
import search from './search';

const indexReducer = combineReducers({
  login,
  search,
});

export default indexReducer;
