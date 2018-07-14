import firebase from 'firebase/app';
import { connect } from 'react-redux';
import MyPage from '../../components/mypage/MyPage';
import { setUserInfo, setPartnerInfo } from '../../actions/mypage';

const mapStateToProps = ({ mypage }) => ({
  userInfo: mypage.userInfo,
  partnerInfo: mypage.partnerInfo,
});

const mapDispatchToProps = dispatch => ({
  // ログインユーザ、パートナーの基本情報を取得
  fetchUserAndPartnerInfo() {
    const db = firebase.firestore();
    const { currentUser } = firebase.auth();
    const userRef = db.collection('users').doc(currentUser.uid);

    userRef.get().then((user) => {
      // ログインユーザの基本情報を取得
      dispatch(setUserInfo(user.data()));

      // 一度ログインユーザのパートナーのuidを取得してから
      const partnerUid = user.data().partner;
      const partnerRef = db.collection('users').doc(partnerUid);
      // パートナーの情報を取得
      partnerRef.get().then((partner) => {
        dispatch(setPartnerInfo(partner.data()));
      });
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MyPage);
