import { connect } from 'react-redux';
import firebase from 'firebase/app';
import _ from 'lodash';
import PointChart from '../../components/mypage/PointChart';
import { setDaylyTotalPoints } from '../../actions/mypage';

import { getTargetDate, totalPointPerDay } from '../../func/aggregatePoint';

const getDaylyPoints = (targetDate, startOfTargetDate, endOfTargetDate, receivedPointRef) => (
  new Promise((resolve) => {
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
  daylyTotalPoints: mypage.daylyTotalPoints,
});

const mapDispatchToProps = dispatch => ({
  // 一週間分のポイント情報を取得 + 日付けごとのポイントを合計
  fetchReceivedPointList() {
    const db = firebase.firestore();
    const { currentUser } = firebase.auth();
    const receivedPointRef = db.collection(`users/${currentUser.uid}/point`);
    const targetDateList = getTargetDate(); // 一週間分の文字列取得(YYYY-MM-DD)
    const promises = [];

    targetDateList.forEach((targetDate) => {
      const startOfTargetDate = new Date(`${targetDate} 00:00:00`);
      const endOfTargetDate = new Date(`${targetDate} 23:59:59`);
      promises
        .push(getDaylyPoints(targetDate, startOfTargetDate, endOfTargetDate, receivedPointRef));
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

export default connect(mapStateToProps, mapDispatchToProps)(PointChart);
