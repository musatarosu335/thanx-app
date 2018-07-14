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

export const setFollowingUser = followingUser => ({
  type: 'SET_FOLLOWING_USER',
  payload: {
    followingUser,
  },
});

export const setFollower = follower => ({
  type: 'SET_FOLLOWER',
  payload: {
    follower,
  },
});

export const setPartnerUid = partnerUid => ({
  type: 'SET_PARTNER_UID',
  payload: {
    partnerUid,
  },
});
