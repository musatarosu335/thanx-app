import firebase from 'firebase/app';
import { connect } from 'react-redux';
import ExecuteButton from '../../components/mypage/ExecuteButton';
import { setReceivedTickets } from '../../actions/mypage';

const mapDispatchToProps = dispatch => ({
  executeAndReacquireTicketList(documentId) {
    const db = firebase.firestore();
    const { currentUser } = firebase.auth();
    const ticketRef = db.collection(`users/${currentUser.uid}/tickets`).doc(documentId);
    const userReceivedTicketsRef = db.collection(`users/${currentUser.uid}/tickets`);

    ticketRef.delete().then(() => {
      const receivedTickets = [];
      // チケットの削除と、削除後のチケット一覧を取得
      userReceivedTicketsRef.orderBy('exchange_time', 'desc').get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const receivedTicket = {
            ...doc.data(),
            document_id: doc.id, // collection内から選択したチケットを削除する為に必要
          };
          receivedTickets.push(receivedTicket);
        });
        dispatch(setReceivedTickets(receivedTickets));
      });
    }).catch((err) => {
      console.log(err); // eslint-disable-line
    });
  },
});

export default connect(null, mapDispatchToProps)(ExecuteButton);
