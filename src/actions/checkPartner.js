export const setPartnerUid = partnerUid => ({
  type: 'SET_PARTNER_UID',
  payload: {
    partnerUid,
  },
});

export const setLoading = loading => ({
  type: 'SET_LOADING',
  payload: {
    loading,
  },
});
