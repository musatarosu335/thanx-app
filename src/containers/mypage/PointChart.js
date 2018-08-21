import { connect } from 'react-redux';
import firebase from 'firebase/app';
import moment from 'moment';
import PointChart from '../../components/mypage/PointChart';
import { setDaylyTotalPoints } from '../../actions/mypage';

import totalPointPerDay from '../../func/aggregatePoint';

const mapStateToProps = ({ mypage }) => ({
  daylyTotalPoints: mypage.daylyTotalPoints,
});

const mapDispatchToProps = dispatch => ({
  // 一週間分のポイント情報を取得 + 日付けごとのポイントを合計
  fetchReceivedPointList() {
    const db = firebase.firestore();
    const { currentUser } = firebase.auth();
    const receivedPointRef = db.collection(`users/${currentUser.uid}/point`);
    const today = new Date();
    today.setDate(today.getDate() - 1); // 要調整
    const lastWeek = new Date();
    lastWeek.setDate(lastWeek.getDate() - 8); // 要調整
    const receivedPointList = [];

    receivedPointRef.where('sent_time', '>=', lastWeek).where('sent_time', '<', today) // 要調整
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const sentTime = doc.data().sent_time.seconds;
          const formattedSentTime = moment.unix(sentTime).format('YYYY-MM-DD');
          const modData = {
            ...doc.data(),
            formattedSentTime,
          };
          receivedPointList.push(modData);
        });
        dispatch(setDaylyTotalPoints(totalPointPerDay(receivedPointList)));
      })
      .catch((err) => {
        console.log(err); // eslint-disable-line no-console
        dispatch(setDaylyTotalPoints([]));
      });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PointChart);
