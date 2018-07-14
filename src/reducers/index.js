import { combineReducers } from 'redux';
import login from './login';
import checkPartner from './checkPartner';
import search from './search';
import mypage from './mypage';

const indexReducer = combineReducers({
  login,
  checkPartner,
  search,
  mypage,
});

export default indexReducer;
