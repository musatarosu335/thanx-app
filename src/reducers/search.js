const initialState = {
  searchWord: '',
  searchResultUsers: [],
  followingUser: {}, // uid
};

const serchReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_SEARCH_WORD':
      return ({
        ...state,
        searchWord: action.payload.searchWord,
      });
    case 'SET_SEARCH_RESULT_USERS':
      return ({
        ...state,
        searchResultUsers: action.payload.searchResultUsers,
      });
    case 'SET_FOLLOWING_USER':
      return ({
        ...state,
        followingUser: action.payload.followingUser,
      });
    default:
      return state;
  }
};

export default serchReducer;
