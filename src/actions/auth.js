const setAuth = isAuth => ({
  type: 'SET_AUTH',
  payload: {
    isAuth,
  },
});

export default setAuth;
