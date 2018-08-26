import { combineReducers } from 'redux';
import checkPartner from './checkPartner';
import search from './search';
import mypage from './mypage';
import settings from './settings';

const indexReducer = combineReducers({
  checkPartner,
  search,
  mypage,
  settings,
});

export default indexReducer;
