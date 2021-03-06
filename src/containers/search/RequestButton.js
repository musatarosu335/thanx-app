import firebase from 'firebase/app';
import { connect } from 'react-redux';
import RequestButton from '../../components/search/RequestButton';
import { setFollowingUser } from '../../actions/search';

const mapStateToProps = ({ search }) => ({
  follower: search.follower,
});

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
      db.collection('users').doc(uid).get().then((user) => {
        if (user.exists) {
          const followingUser = {
            ...user.data(),
            uid: user.id,
          };
          dispatch(setFollowingUser(followingUser));
        }
      });
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

export default connect(mapStateToProps, mapDispatchToProps)(RequestButton);
