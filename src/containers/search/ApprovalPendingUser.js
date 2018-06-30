import { connect } from 'react-redux';
import ApprovalPendingUser from '../../components/search/ApprovalPendingUser';

const mapStateToProps = ({ search }) => ({
  followingUser: search.followingUser,
});

export default connect(mapStateToProps)(ApprovalPendingUser);
