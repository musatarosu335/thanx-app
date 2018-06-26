import { connect } from 'react-redux';
import SearchResults from '../../components/search/SearchResults';

const mapStateToProps = ({ search }) => ({
  searchResultUsers: search.searchResultUsers,
});

export default connect(mapStateToProps)(SearchResults);
