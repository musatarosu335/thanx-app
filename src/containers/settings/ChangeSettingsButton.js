import { connect } from 'react-redux';
import firebase from 'firebase/app';
import ChangeSettingsButton from '../../components/settings/ChangeSettingsButton';

const mapStateToProps = ({ settings }) => ({
  userName: settings.userName,
});

const mapDispatchToProps = () => ({
  updateUserInfo(userName) {
    const db = firebase.firestore();
    const { currentUser } = firebase.auth();
    const currentUserRef = db.collection('users').doc(currentUser.uid);

    currentUserRef.set({
      user_name: userName,
    }, { merge: true }).then(() => {
      // 上から「変更しました」ってのをだす
      console.log('update user info');
    }).catch((err) => {
      console.log(err); // eslint-disable-line
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ChangeSettingsButton);
