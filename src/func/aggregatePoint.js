import _ from 'lodash';
import moment from 'moment';

export const getTargetDate = () => {
  const today = new Date();
  const dateArray = [];

  for (let i = 1; i < 8; i += 1) {
    const formattedDate = moment(today).subtract(i, 'days').format('YYYY-MM-DD');
    dateArray.push(formattedDate);
  }
  return dateArray;
};

export const totalPointPerDay = (receivedPointList) => {
  // "formattedSentTime"でグルーピングしてオブジェクト化
  // const groupedPointList = _.groupBy(receivedPointList, 'formattedSentTime');
  const daylyTotalPoints = [];

  _.forIn(receivedPointList, (value, key) => {
    let totalPoint = 0;
    // 配列内のオブジェクトの"point"を取得して加算していく
    value.forEach((pointInfo) => {
      totalPoint += pointInfo.point;
    });
    // 日毎のポイントを合計したオブジェクトを作成
    const daylyPoint = {
      date: key,
      totalPoint,
    };
    daylyTotalPoints.push(daylyPoint);
  });
  return daylyTotalPoints;
};
