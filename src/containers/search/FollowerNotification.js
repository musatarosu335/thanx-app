import { connect } from 'react-redux';
import FollowerNotification from '../../components/search/FollowerNotification';

const mapStateToProps = ({ search }) => ({
  follower: search.follower,
});

export default connect(mapStateToProps)(FollowerNotification);
