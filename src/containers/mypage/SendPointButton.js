// import firebase from 'firebase/app';
import { connect } from 'react-redux';
import SendPointButton from '../../components/mypage/SendPointButton';
import { sendPointAndMessage } from '../../actions/mypage';

const mapDispatchToProps = dispatch => ({
  sendPointAndMessage() {
    dispatch(sendPointAndMessage());
  },
});

export default connect(null, mapDispatchToProps)(SendPointButton);
