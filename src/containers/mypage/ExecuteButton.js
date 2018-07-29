import firebase from 'firebase/app';
import { connect } from 'react-redux';
import ExecuteButton from '../../components/mypage/ExecuteButton';

const mapDispatchToProps = () => ({
  executeTicket(documentId) {
    const db = firebase.firestore();
    const { currentUser } = firebase.auth();
    const ticketRef = db.collection(`users/${currentUser.uid}/tickets`).doc(documentId);

    ticketRef.delete().then(() => {
      console.log('Delete received ticket'); // eslint-disable-line no-console
    }).catch((err) => {
      console.log(err); // eslint-disable-line no-console
    });
  },
});

export default connect(null, mapDispatchToProps)(ExecuteButton);
