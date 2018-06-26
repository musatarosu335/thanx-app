import firebase from 'firebase/app';
import { connect } from 'react-redux';
import SearchButton from '../../components/search/SearchButton';
import { setSearchResultUsers } from '../../actions/search';

const mapStateToProps = ({ search }) => ({
  searchResultUsers: search.searchResultUsers,
});

const mapDispatchToProps = dispatch => ({
  searchAndSetUses(searchWord) {
    const db = firebase.firestore();
    const serchedUsers = [];

    db.collection('users').where('user_name', '==', searchWord).get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          serchedUsers.push(doc.data().user_name);
        });
        return serchedUsers;
      })
      .then((result) => {
        dispatch(setSearchResultUsers(result));
      })
      .catch((err) => {
        console.log(err); // eslint-disable-line
      });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchButton);
