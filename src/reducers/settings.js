const initialState = {
  userName: '',
  closedStateSnackbar: false,
  allowChangeSettings: true,
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
    case 'TOGGLE_CHANGE_SETTINGS':
      return ({
        ...state,
        allowChangeSettings: action.payload.isAllowed,
      });
    default:
      return state;
  }
};

export default settingsReducer;
