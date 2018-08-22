import { connect } from 'react-redux';
import firebase from 'firebase/app';
import PointChart from '../../components/mypage/PointChart';
import { setDaylyTotalPoints } from '../../actions/mypage';

import { getTargetDate, totalPointPerDay } from '../../func/aggregatePoint';

const mapStateToProps = ({ mypage }) => ({
  daylyTotalPoints: mypage.daylyTotalPoints,
});

const mapDispatchToProps = dispatch => ({
  // 一週間分のポイント情報を取得 + 日付けごとのポイントを合計
  fetchReceivedPointList() {
    const db = firebase.firestore();
    const { currentUser } = firebase.auth();
    const receivedPointRef = db.collection(`users/${currentUser.uid}/point`);
    const targetDateList = getTargetDate();
    const receivedPointList = [];

    targetDateList.forEach((targetDate) => {
      const startOfTargetDate = new Date(`${targetDate} 00:00:00`);
      const endOfTargetDate = new Date(`${targetDate} 23:59:59`);

      receivedPointRef.where('sent_time', '>=', startOfTargetDate).where('sent_time', '<', endOfTargetDate) // 要調整
        .get()
        .then((querySnapshot) => {
          const daylyDatas = []; // querySnapshotに値がなかった場合のために、空の配列を定義
          querySnapshot.forEach((doc) => {
            daylyDatas.push(doc.data());
          });
          receivedPointList[targetDate] = daylyDatas;
          dispatch(setDaylyTotalPoints(totalPointPerDay(receivedPointList)));
        })
        .catch((err) => {
          console.log(err); // eslint-disable-line no-console
          dispatch(setDaylyTotalPoints([]));
        });
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PointChart);
