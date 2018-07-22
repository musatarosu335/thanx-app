import firebase from 'firebase/app';
import { connect } from 'react-redux';
import ReceivedTicketList from '../../components/mypage/ReceivedTicketList';
import { setReceivedTickets } from '../../actions/mypage';

const mapStateToProps = ({ mypage }) => ({
  receivedTickets: mypage.receivedTickets,
});

const mapDispatchToProps = dispatch => ({
  fetchReceivedTickets() {
    const db = firebase.firestore();
    const { currentUser } = firebase.auth();
    const userReceivedTicketsRef = db.collection(`users/${currentUser.uid}/tickets`);
    const receivedTickets = [];

    userReceivedTicketsRef.orderBy('exchange_time', 'desc').onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        receivedTickets.push(doc.data());
      });
      dispatch(setReceivedTickets(receivedTickets));
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ReceivedTicketList);
