import { connect } from 'react-redux';
import MessageArea from '../../components/mypage/MessageArea';
import { changeMessage } from '../../actions/mypage';

const mapStateToProps = ({ mypage }) => ({
  message: mypage.message,
});

const mapDispatchToProps = dispatch => ({
  changeMessage(message) {
    dispatch(changeMessage(message));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MessageArea);
