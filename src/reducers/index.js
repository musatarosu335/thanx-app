import { combineReducers } from 'redux';
import checkPartner from './checkPartner';
import search from './search';
import mypage from './mypage';

const indexReducer = combineReducers({
  checkPartner,
  search,
  mypage,
});

export default indexReducer;
