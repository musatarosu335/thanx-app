const initialState = {
  searchWord: '',
};

const serchReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_SEARCH_WORD':
      return ({
        ...state,
        searchWord: action.payload.searchWord,
      });
    default:
      return state;
  }
};

export default serchReducer;
