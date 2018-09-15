import firebase from 'firebase/app';
import _ from 'lodash';
import { connect } from 'react-redux';
import MyPage from '../../components/mypage/Mypage';
import {
  fetchUserInfo,
  fetchPartnerInfo,
  setTicketList,
  setReceivedTickets,
  fetchSentTickets,
  setDaylyTotalPoints,
} from '../../actions/mypage';
import { getTargetDate, totalPointPerDay } from '../../func/aggregatePoint';

// 1日のポイント情報をFirestoreから取得
// { 日付: Array }の形式で返す
const getDaylyPoints = (targetDate, receivedPointRef) => (
  new Promise((resolve) => {
    // const startOfTargetDate = new Date(`${targetDate} 00:00:00`);
    // const endOfTargetDate = new Date(`${targetDate} 23:59:59`);
    const startOfTargetDate = new Date(targetDate);
    const endOfTargetDate = new Date(targetDate);
    endOfTargetDate.setDate(endOfTargetDate.getDate() + 1);

    receivedPointRef.where('sent_time', '>=', startOfTargetDate).where('sent_time', '<', endOfTargetDate)
      .get()
      .then((querySnapshot) => {
        const daylyPoints = []; // querySnapshotに値がなかった場合のために、空の配列を定義
        querySnapshot.forEach((doc) => {
          daylyPoints.push(doc.data());
        });
        resolve({ [targetDate]: daylyPoints }); // 日付けをkeyに持つオブジェクトとして返す
      });
  })
);

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
  // 一週間分のポイント情報を取得 + 日付けごとのポイントを合計
  fetchDaylyTotalPoints() {
    const db = firebase.firestore();
    const { currentUser } = firebase.auth();
    const receivedPointRef = db.collection(`users/${currentUser.uid}/point`);
    const targetDateList = getTargetDate(); // 一週間分の文字列取得(YYYY-MM-DD)
    const promises = [];

    targetDateList.forEach((targetDate) => {
      promises.push(getDaylyPoints(targetDate, receivedPointRef));
    });

    Promise.all(promises).then((results) => {
      // [{ 日付: Array }, { 日付: Array }, ...]の形式で返ってくるので、
      // totalPointPerDay()で加工しやすくするために、
      // { 日付： Array, 日付: Array, ... }の形式に修正する
      const weeklyPoints = {};
      results.forEach((result) => {
        _.forIn(result, (value, key) => {
          weeklyPoints[key] = value;
        });
      });
      dispatch(setDaylyTotalPoints(totalPointPerDay(weeklyPoints)));
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MyPage);
