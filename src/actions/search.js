export const changeSearchWord = searchWord => ({
  type: 'CHANGE_SEARCH_WORD',
  payload: {
    searchWord,
  },
});

export const setSearchResultUsers = searchResultUsers => ({
  type: 'SET_SEARCH_RESULT_USERS',
  payload: {
    searchResultUsers,
  },
});
