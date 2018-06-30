import firebase from 'firebase/app';
import { connect } from 'react-redux';
import SearchPage from '../../components/search/SearchPage';
import { setFollowingUser } from '../../actions/search';

const mapStateToProps = ({ search }) => ({
  followingUser: search.followingUser,
});

const mapDispatchToProps = dispatch => ({
  fetchAndSetFollowingUser() {
    const db = firebase.firestore();
    const { currentUser } = firebase.auth();
    const followingUserRef = db.collection(`users/${currentUser.uid}/following`);

    followingUserRef.get().then((snapshot) => {
      snapshot.forEach((doc) => {
        if (doc.exists) {
          // dispatch(setFollowingUser(doc.id));
          db.collection('users').doc(doc.id).get().then((user) => {
            const followingUser = {
              ...user.data(),
              uid: user.id,
            };
            dispatch(setFollowingUser(followingUser));
          });
        } else {
          console.log('No such document!'); // eslint-disable-line
        }
      });
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
