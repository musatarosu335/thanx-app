import { connect } from 'react-redux';
import PointArea from '../../components/mypage/PointArea';

const mapStateToProps = ({ mypage }) => ({
  point: mypage.point,
});

export default connect(mapStateToProps)(PointArea);
