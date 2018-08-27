const initialState = {
  userName: '',
  closedStateSnackbar: false,
};

const settingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_USER_NAME':
      return ({
        ...state,
        userName: action.payload.userName,
      });
    case 'TOGGLE_SNACKBAR':
      return ({
        ...state,
        closedStateSnackbar: action.payload.closedState,
      });
    default:
      return state;
  }
};

export default settingsReducer;
