import firebase from 'firebase/app';
import { connect } from 'react-redux';
import RequestButton from '../../components/search/RequestButton';
import { setFollowingUser } from '../../actions/search';

const mapDispatchToProps = dispatch => ({
  // フォローした・されたユーザーへの書き込み処理
  writeFollowingAndFollowerUser(uid) {
    const db = firebase.firestore();
    const { currentUser } = firebase.auth();
    const followingUserRef = db.collection(`users/${currentUser.uid}/following`).doc(uid);
    const followerUserRef = db.collection(`users/${uid}/follower`).doc(currentUser.uid);

    // followingの書き込み処理
    followingUserRef.set({
      uid,
      follow_time: new Date(),
    }).then(() => {
      dispatch(setFollowingUser(uid));
      console.log('Written Following User'); // eslint-disable-line no-console
    }).catch((err) => {
      console.log(err); // eslint-disable-line no-console
    });

    // followerの書き込み処理
    followerUserRef.set({
      uid: currentUser.uid,
      followed_time: new Date(),
    }).then(() => {
      console.log('Written Follower User'); // eslint-disable-line no-console
    }).catch((err) => {
      console.log(err); // eslint-disable-line no-console
    });
  },
});

export default connect(null, mapDispatchToProps)(RequestButton);
