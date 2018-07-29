import firebase from 'firebase/app';
import { connect } from 'react-redux';
import MyPage from '../../components/mypage/MyPage';
import { fetchUserInfo, fetchPartnerInfo, setTicketList, setReceivedTickets, fetchSentTickets } from '../../actions/mypage';

const mapStateToProps = ({ mypage }) => ({
  userInfo: mypage.userInfo,
  partnerInfo: mypage.partnerInfo,
});

const mapDispatchToProps = dispatch => ({
  // ログインユーザの基本情報の取得とセットとリッスン
  fetchAndSetUserInfo() {
    dispatch(fetchUserInfo());
  },
  // パートナーの基本状の取得とセットとリッスン
  fetchAndSetPartnerInfo() {
    dispatch(fetchPartnerInfo());
  },
  // チケット一覧を取得
  fetchTicketList() {
    const db = firebase.firestore();
    const ticketsRef = db.collection('tickets');
    const tickets = [];

    ticketsRef.orderBy('point', 'asc').get()
      .then((querySnapshot) => {
        let ticket;
        querySnapshot.forEach((doc) => {
          ticket = {
            ...doc.data(),
            ticketId: doc.id,
          };
          tickets.push(ticket);
        });
        dispatch(setTicketList(tickets));
      })
      .catch((err) => {
        console.log(err); // eslint-disable-line
      });
  },
  // 受け取っているチケット一覧の取得とリッスン
  fetchReceivedTickets() {
    const db = firebase.firestore();
    const { currentUser } = firebase.auth();
    const receivedTicketsRef = db.collection(`users/${currentUser.uid}/tickets`);

    receivedTicketsRef.orderBy('exchange_time', 'desc').onSnapshot((querySnapshot) => {
      const receivedTickets = [];
      querySnapshot.forEach((doc) => {
        const receivedTicket = {
          ...doc.data(),
          document_id: doc.id, // collection内から選択したチケットを削除する為に必要
        };
        receivedTickets.push(receivedTicket);
      });
      dispatch(setReceivedTickets(receivedTickets));
    });
  },
  // 送ったチケット一覧の取得とリッスン
  fetchSentTickets() {
    dispatch(fetchSentTickets());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MyPage);
