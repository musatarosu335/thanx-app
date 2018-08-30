const initialState = {
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_AUTH':
      return ({
        ...state,
        isAuth: action.payload.isAuth,
      });
    default:
      return state;
  }
};

export default authReducer;
