import { connect } from 'react-redux';
import SearchTab from '../../components/search/SearchTab';

const mapStateToProps = ({ search }) => ({
  followingUser: search.followingUser,
});

export default connect(mapStateToProps)(SearchTab);
