import { connect } from 'react-redux';
import firebase from 'firebase/app';
import ChangeSettingsButton from '../../components/settings/ChangeSettingsButton';
import { toggleSnackbar } from '../../actions/settings';

const mapStateToProps = ({ settings }) => ({
  userName: settings.userName,
});

const mapDispatchToProps = dispatch => ({
  updateUserInfo(userName) {
    const db = firebase.firestore();
    const { currentUser } = firebase.auth();
    const currentUserRef = db.collection('users').doc(currentUser.uid);

    currentUserRef.set({
      user_name: userName,
    }, { merge: true }).then(() => {
      // snackbar表示
      dispatch(toggleSnackbar(true));
    }).catch((err) => {
      console.log(err); // eslint-disable-line
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ChangeSettingsButton);
