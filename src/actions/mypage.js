export const setUserInfo = userInfo => ({
  type: 'SET_USER_INFO',
  payload: {
    userInfo,
  },
});

export const setPartnerInfo = partnerInfo => ({
  type: 'SET_PARTNER_INFO',
  payload: {
    partnerInfo,
  },
});
