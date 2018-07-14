const initialState = {
  partnerUid: '',
  loading: true,
};

const checkPartnerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PARTNER_UID':
      return ({
        ...state,
        partnerUid: action.payload.partnerUid,
      });
    case 'SET_LOADING':
      return ({
        ...state,
        loading: action.payload.loading,
      });
    default:
      return state;
  }
};

export default checkPartnerReducer;
