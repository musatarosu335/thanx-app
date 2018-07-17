import { connect } from 'react-redux';
import PointSlider from '../../components/mypage/PointSlider';
import { changePoint } from '../../actions/mypage';

const mapStateToProps = ({ mypage }) => ({
  point: mypage.point,
});

const mapDispatchToProps = dispatch => ({
  changePoint(point) {
    dispatch(changePoint(point));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PointSlider);
