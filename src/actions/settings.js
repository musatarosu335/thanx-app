export const changeUserName = userName => ({
  type: 'CHANGE_USER_NAME',
  payload: {
    userName,
  },
});

export const toggleSnackbar = closedState => ({
  type: 'TOGGLE_SNACKBAR',
  payload: {
    closedState,
  },
});
