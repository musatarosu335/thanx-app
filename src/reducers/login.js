const initialState = {
  userName: '',
  email: '',
  password: '',
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_USER_NAME':
      return ({
        ...state,
        userName: action.payload.userName,
      });
    default:
      return state;
  }
};

export default loginReducer;
