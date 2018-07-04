import firebase from 'firebase/app';
import { connect } from 'react-redux';
import SearchPage from '../../components/search/SearchPage';
import { setFollowingUser, setFollower } from '../../actions/search';

const mapDispatchToProps = dispatch => ({
  // フォローしているユーザの取得
  fetchAndSetFollowingUser() {
    const db = firebase.firestore();
    const { currentUser } = firebase.auth();
    const followingUserRef = db.collection(`users/${currentUser.uid}/following`);

    followingUserRef.limit(1).get().then((snapshot) => { // 取得する値は1つのみ
      snapshot.forEach((doc) => {
        if (doc.exists) {
          db.collection('users').doc(doc.id).get().then((user) => {
            const followingUser = {
              ...user.data(),
              uid: user.id,
            };
            dispatch(setFollowingUser(followingUser));
          });
        }
      });
    });
  },

  // フォロワー一覧の取得
  fetchAndSetFollower() {
    const db = firebase.firestore();
    const { currentUser } = firebase.auth();
    const followerRef = db.collection(`users/${currentUser.uid}/follower`);
    const follower = [];

    followerRef.get().then((snapshot) => {
      snapshot.forEach((doc) => {
        if (doc.exists) {
          db.collection('users').doc(doc.id).get().then((user) => {
            const eachFollower = {
              ...user.data(),
              uid: user.id,
            };
            follower.push(eachFollower);
            dispatch(setFollower(follower)); // dispatchのタイミングを変える必要あり
          });
        }
      });
    });
  },
});

export default connect(null, mapDispatchToProps)(SearchPage);
