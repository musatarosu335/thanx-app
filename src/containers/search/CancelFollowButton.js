import { connect } from 'react-redux';
import CancelFollowButton from '../../components/search/CancelFollowButton';
import { setFollowingUser } from '../../actions/search';

const mapDispatchToProps = dispatch => ({
  cancelFollowing() {
    dispatch(setFollowingUser({})); // 空のオブジェクトをセットしてリセット
  },
});

export default connect(null, mapDispatchToProps)(CancelFollowButton);
