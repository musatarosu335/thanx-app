import firebase from 'firebase/app';
import { connect } from 'react-redux';
import ApprovalButton from '../../components/search/ApprovalButton';
import { setPartnerUid } from '../../actions/search';

const mapDispatchToProps = dispatch => ({
  // partnerの状態を変更と,
  // following, followerの書き込み処理
  createPartner(uid) {
    const db = firebase.firestore();
    const { currentUser } = firebase.auth();
    const currentUserRef = db.collection('users').doc(currentUser.uid);
    const followerRef = db.collection('users').doc(uid);
    const followingUserRef = db.collection(`users/${currentUser.uid}/following`).doc(uid);
    const followerUserRef = db.collection(`users/${uid}/follower`).doc(currentUser.uid);

    // partner(uid)の書き込み(承認した側)
    currentUserRef.set({
      partner: uid,
    }, { merge: true }).then(() => {
      dispatch(setPartnerUid(uid));
      console.log('Write Partner'); // eslint-disable-line no-console
    }).catch((err) => {
      console.log(err); // eslint-disable-line no-console
    });

    // partner(uid)の書き込み(承認された側)
    followerRef.set({
      partner: currentUser.uid,
    }, { merge: true }).then(() => {
      console.log('Write Partner'); // eslint-disable-line no-console
    }).catch((err) => {
      console.log(err); // eslint-disable-line no-console
    });

    // followingの書き込み処理
    followingUserRef.set({
      uid,
      follow_time: new Date(),
    }).then(() => {
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

export default connect(null, mapDispatchToProps)(ApprovalButton);
