import { connect } from 'react-redux';
import Auth from '../components/Auth';
import setAuth from '../actions/auth';

const mapDispatchToProps = dispatch => ({
  setAuth(isAuth) {
    dispatch(setAuth(isAuth));
  },
});

export default connect(null, mapDispatchToProps)(Auth);
