import { connect } from 'react-redux';
import firebase from 'firebase/app';
import UserNameForm from '../../components/settings/UserNameForm';
import { changeUserName } from '../../actions/settings';

const mapStateToProps = ({ settings }) => ({
  userName: settings.userName,
});

const mapDispatchToProps = dispatch => ({
  changeUserName(userName) {
    dispatch(changeUserName(userName));
  },
  // Firestoreから現在の"user_name"を取得
  fetchUserName() {
    const db = firebase.firestore();
    const { currentUser } = firebase.auth();
    const currentUserRef = db.collection('users').doc(currentUser.uid);

    currentUserRef.get().then((doc) => {
      const userName = doc.data().user_name;
      dispatch(changeUserName(userName));
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(UserNameForm);
