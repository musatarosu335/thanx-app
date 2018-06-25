export const changeSearchWord = searchWord => ({
  type: 'CHANGE_SEARCH_WORD',
  payload: {
    searchWord,
  },
});

export const dammy = () => ({
  type: 'DAMMY',
  payload: {
    dammy: null,
  },
});
