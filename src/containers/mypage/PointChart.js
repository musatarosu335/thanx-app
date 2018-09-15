import { connect } from 'react-redux';
import PointChart from '../../components/mypage/PointChart';

const mapStateToProps = ({ mypage }) => ({
  daylyTotalPoints: mypage.daylyTotalPoints,
});

export default connect(mapStateToProps)(PointChart);
