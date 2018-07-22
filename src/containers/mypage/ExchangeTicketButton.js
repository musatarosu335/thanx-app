import firebase from 'firebase/app';
import { connect } from 'react-redux';
import ExchangeTicketButton from '../../components/mypage/ExchangeTicketButton';

const mapStateToProps = ({ mypage, checkPartner }) => ({
  userInfo: mypage.userInfo,
  partnerUid: checkPartner.partnerUid,
});

const mapDispatchToProps = () => ({
  exchangeTicket(ticket, userPoint, partnerUid) {
    const db = firebase.firestore();
    const { currentUser } = firebase.auth();
    const userRef = db.collection('users').doc(currentUser.uid);
    const partnerTicketsRef = db.collection(`users/${partnerUid}/tickets`);

    // ユーザのポイントを更新
    const newPoint = userPoint - ticket.point;
    userRef.set({
      point: newPoint,
    }, { merge: true }).then(() => {
      console.log('Update User Point'); // eslint-disable-line
    }).catch((err) => {
      console.log(err); // eslint-disable-line
    });

    // チケットをFirestoreに登録(パートナー側)
    partnerTicketsRef.add({
      ...ticket,
      exchange_time: new Date(),
    }).then(() => {
      console.log('Exchange Ticket'); // eslint-disable-line
    }).catch((err) => {
      console.log(err); // eslint-disable-line
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ExchangeTicketButton);
