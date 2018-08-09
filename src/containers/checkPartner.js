import firebase from 'firebase/app';
import { connect } from 'react-redux';
import CheckPartner from '../components/CheckPartner';
import { setPartnerUid, setLoading } from '../actions/checkPartner';

const mapStateToProps = ({ checkPartner }) => ({
  partnerUid: checkPartner.partnerUid,
  loading: checkPartner.loading,
});

const mapDispatchToProps = dispatch => ({
  setPartnerUidAndLoading() {
    const db = firebase.firestore();
    const { currentUser } = firebase.auth();
    const userRef = db.collection('users').doc(currentUser.uid);

    userRef.get().then((doc) => {
      if (doc.exists) {
        if (doc.data().partner) {
          dispatch(setPartnerUid(doc.data().partner));
          dispatch(setLoading(false));
        } else {
          dispatch(setLoading(false));
        }
      } else { // ユーザ登録直後のFirestoreへの書き込み処理(非同期)に対応するため
        dispatch(setLoading(false));
      }
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckPartner);
