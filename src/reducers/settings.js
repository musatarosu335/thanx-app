const initialState = {
  userName: '',
  isOpenSnackbar: false,
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
        isOpenSnackbar: action.payload.isOpen,
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
