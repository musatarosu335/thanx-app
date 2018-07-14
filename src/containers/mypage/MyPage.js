import { connect } from 'react-redux';
import MyPage from '../../components/mypage/MyPage';
import { fetchUserInfo, fetchPartnerInfo } from '../../actions/mypage';

const mapStateToProps = ({ mypage }) => ({
  userInfo: mypage.userInfo,
  partnerInfo: mypage.partnerInfo,
});

const mapDispatchToProps = dispatch => ({
  // ログインユーザの基本情報の取得とセット
  fetchAndSetUserInfo() {
    dispatch(fetchUserInfo());
  },
  // パートナーの基本状の取得とセット
  fetchAndSetPartnerInfo() {
    dispatch(fetchPartnerInfo());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MyPage);
