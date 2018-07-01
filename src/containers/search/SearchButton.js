import firebase from 'firebase/app';
import { connect } from 'react-redux';
import SearchButton from '../../components/search/SearchButton';
import { setSearchResultUsers, changeSearchWord } from '../../actions/search';

const mapStateToProps = ({ search }) => ({
  searchResultUsers: search.searchResultUsers,
});

const mapDispatchToProps = dispatch => ({
  searchAndSetUses(searchWord) {
    const db = firebase.firestore();
    const { currentUser } = firebase.auth();
    const serchedUsers = [];

    db.collection('users').where('user_name', '==', searchWord).get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          // 検索対象が自分自身の場合は検索結果に表示させない
          if (currentUser.uid !== doc.id) {
            // uidを含めたオブジェクトを作成
            const userData = {
              ...doc.data(),
              uid: doc.id,
            };
            serchedUsers.push(userData);
          }
        });
        return serchedUsers;
      })
      .then((result) => {
        dispatch(setSearchResultUsers(result));
        dispatch(changeSearchWord('')); // 検索フォームをリセット
      })
      .catch((err) => {
        console.log(err); // eslint-disable-line
      });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchButton);
