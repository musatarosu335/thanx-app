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

// Storeのリセット用
const rootReducer = (state, action) => {
  if (action.type === 'CLEAR_ALL_STATE') {
    // eslint-disable-next-line
    state = undefined;
  }
  return indexReducer(state, action);
};


export default rootReducer;
