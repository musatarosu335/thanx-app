const initialState = {
  userInfo: {},
  partnerInfo: {},
  point: 0,
  message: '',
  tickets: [],
  receivedTickets: [],
  sentTickets: [],
  receivedPointList: [],
  daylyPointList: [],
};

const mypageReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER_INFO':
      return ({
        ...state,
        userInfo: action.payload.userInfo,
      });
    case 'SET_PARTNER_INFO':
      return ({
        ...state,
        partnerInfo: action.payload.partnerInfo,
      });
    case 'CHANGE_POINT':
      return ({
        ...state,
        point: action.payload.point,
      });
    case 'CHANGE_MESSAGE':
      return ({
        ...state,
        message: action.payload.message,
      });
    case 'SET_TICKET_LIST':
      return ({
        ...state,
        tickets: action.payload.tickets,
      });
    case 'SET_RECEIVED_TICKETS':
      return ({
        ...state,
        receivedTickets: action.payload.receivedTickets,
      });
    case 'SET_SENT_TICKETS':
      return ({
        ...state,
        sentTickets: action.payload.sentTickets,
      });
    case 'SET_RECEIVED_POINT_LIST':
      return ({
        ...state,
        receivedPointList: action.payload.receivedPointList,
      });
    case 'SET_DAYLY_POINT_LIST':
      return ({
        ...state,
        daylyPointList: action.payload.daylyPointList,
      });
    default:
      return state;
  }
};

export default mypageReducer;
