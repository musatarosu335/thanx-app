import { connect } from 'react-redux';
import PointChart from '../../components/mypage/PointChart';
import { setReceivedPointList, setDaylyPointList } from '../../actions/mypage';

import totalPointPerDay from '../../func/aggregatePoint';
import fetchWeeklyPoint from '../../func/fetchWeeklyPoint';

const mapStateToProps = ({ mypage }) => ({
  daylyPointList: mypage.daylyPointList,
});

const mapDispatchToProps = dispatch => ({
  // 一週間分のポイント情報を取得 + 日付けごとのポイントを合計
  fetchReceivedPointList() {
    fetchWeeklyPoint().then((receivedPointList) => {
      dispatch(setReceivedPointList(receivedPointList));
      dispatch(setDaylyPointList(totalPointPerDay(receivedPointList)));
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PointChart);
