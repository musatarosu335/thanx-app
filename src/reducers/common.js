const initialState = {
  isOpenSidebar: false,
};

const commonReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_SIDEBAR':
      return ({
        ...state,
        isOpenSidebar: action.payload.isOpen,
      });
    default:
      return state;
  }
};

export default commonReducer;
