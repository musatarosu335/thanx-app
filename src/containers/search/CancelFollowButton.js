import firebase from 'firebase/app';
import { connect } from 'react-redux';
import CancelFollowButton from '../../components/search/CancelFollowButton';
import { setFollowingUser, setSearchResultUsers } from '../../actions/search';

const mapStateToProps = ({ search }) => ({
  followingUser: search.followingUser,
});

const mapDispatchToProps = dispatch => ({
  deleteFollowingAndFollowerUser(uid) {
    // 空のオブジェクトをセットしてリセット
    dispatch(setFollowingUser({}));
    // 空の配列をセットしてSearchResultUsersの表示をリセット
    dispatch(setSearchResultUsers([]));

    // Firestoreからfollowing, followerを削除
    const db = firebase.firestore();
    const { currentUser } = firebase.auth();
    const followingUserRef = db.collection(`users/${currentUser.uid}/following`).doc(uid);
    const followerUserRef = db.collection(`users/${uid}/follower`).doc(currentUser.uid);

    // followingの削除
    followingUserRef.delete().then(() => {
      console.log('Unfollowed'); // eslint-disable-line
    }).catch(err => console.log(err)); // eslint-disable-line

    // followerの削除
    followerUserRef.delete().then(() => {
      console.log('Delete follower'); // eslint-disable-line
    }).catch(err => console.log(err)); // eslint-disable-line
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CancelFollowButton);
