import { connect } from 'react-redux';
import LogoutButton from '../../components/common/LogoutButton';
import setAuth from '../../actions/auth';

const mapDispatchToProps = dispatch => ({
  setAuth(isAuth) {
    dispatch(setAuth(isAuth));
  },
});

export default connect(null, mapDispatchToProps)(LogoutButton);
