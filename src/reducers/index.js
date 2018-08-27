import { combineReducers } from 'redux';
import common from './common';
import checkPartner from './checkPartner';
import search from './search';
import mypage from './mypage';
import settings from './settings';

const indexReducer = combineReducers({
  common,
  checkPartner,
  search,
  mypage,
  settings,
});

export default indexReducer;
