export const changeUserName = userName => ({
  type: 'CHANGE_USER_NAME',
  payload: {
    userName,
  },
});

export const toggleSnackbar = isOpen => ({
  type: 'TOGGLE_SNACKBAR',
  payload: {
    isOpen,
  },
});

export const toggleChangeSettings = isAllowed => ({
  type: 'TOGGLE_CHANGE_SETTINGS',
  payload: {
    isAllowed,
  },
});
