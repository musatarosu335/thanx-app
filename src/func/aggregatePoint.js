import _ from 'lodash';

const totalPointPerDay = (receivedPointList) => {
  // "formattedSentTime"でグルーピングしてオブジェクト化
  const groupedPointList = _.groupBy(receivedPointList, 'formattedSentTime');
  const daylyPointList = [];

  _.forIn(groupedPointList, (value, key) => {
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
    daylyPointList.push(daylyPoint);
  });
  return daylyPointList;
};

export default totalPointPerDay;
