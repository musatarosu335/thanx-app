const changeUserName = userName => ({
  type: 'CHANGE_USER_NAME',
  payload: {
    userName,
  },
});

export default changeUserName;
