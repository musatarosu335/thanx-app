import { combineReducers } from 'redux';
import login from './login';
import search from './search';
import mypage from './mypage';

const indexReducer = combineReducers({
  login,
  search,
  mypage,
});

export default indexReducer;
