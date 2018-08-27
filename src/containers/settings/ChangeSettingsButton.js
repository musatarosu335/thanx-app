import { connect } from 'react-redux';
import firebase from 'firebase/app';
import ChangeSettingsButton from '../../components/settings/ChangeSettingsButton';
import { toggleSnackbar, toggleChangeSettings } from '../../actions/settings';

const mapStateToProps = ({ settings }) => ({
  userName: settings.userName,
  allowChangeSettings: settings.allowChangeSettings,
});

const mapDispatchToProps = dispatch => ({
  // ユーザー設定の更新
  updateUserInfo(userName) {
    const db = firebase.firestore();
    const { currentUser } = firebase.auth();
    const currentUserRef = db.collection('users').doc(currentUser.uid);

    currentUserRef.set({
      user_name: userName,
    }, { merge: true }).then(() => {
      // snackbar表示
      dispatch(toggleSnackbar(true));
      // ChangeSettingsButtonをクリック可能に
      dispatch(toggleChangeSettings(true));
    }).catch((err) => {
      console.log(err); // eslint-disable-line
    });
  },
  // ChangeSettingsButtonをクリック可否を変更
  toggleChangeSettings(isAllowed) {
    dispatch(toggleChangeSettings(isAllowed));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ChangeSettingsButton);
