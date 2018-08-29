import firebase from 'firebase/app';
import { connect } from 'react-redux';
import SearchPage from '../../components/search/SearchPage';
import { setFollowingUser, setFollower, setPartnerUid } from '../../actions/search';

const mapStateToProps = ({ search }) => ({
  partnerUid: search.partnerUid,
});

const mapDispatchToProps = dispatch => ({
  // ペアの有無をチェック(ペアのUIDを取得)
  checkPartner() {
    const db = firebase.firestore();
    const { currentUser } = firebase.auth();
    const currentUserRef = db.collection('users').doc(currentUser.uid);

    // ユーザ情報がFirestoreに登録されるまでリッスン→登録されたらデタッチ
    // ユーザ登録直後のリダイレクトではFirestoreへのユーザ情報の書き込みが非同期処理になるため
    const unsubscribe = currentUserRef.onSnapshot((doc) => {
      if (doc.exists) {
        unsubscribe(); // ユーザ情報リスナーをデタッチ
        const { partner } = doc.data();
        if (partner) {
          dispatch(setPartnerUid(partner));
        }
      } else {
        console.log('Not exists...'); // eslint-disable-line no-console
      }
    });
  },

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

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
