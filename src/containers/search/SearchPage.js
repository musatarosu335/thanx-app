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
        if (doc) {
          dispatch(setFollowingUser(doc.id));
        }
      }).catch((err) => {
        console.log(err); // eslint-disable-line
      });
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
