import { connect } from 'react-redux';
import UserInfoTab from '../../components/mypage/UserInfoTab';

const mapStateToProps = ({ mypage }) => ({
  userInfo: mypage.userInfo,
  partnerInfo: mypage.partnerInfo,
});

export default connect(mapStateToProps)(UserInfoTab);
