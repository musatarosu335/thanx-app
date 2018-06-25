import { connect } from 'react-redux';
import SearchForm from '../../components/search/SearchForm';
import { changeSearchWord } from '../../actions/search';

const mapStateToProps = ({ search }) => ({
  searchWord: search.searchWord,
});

const mapDispatchToProps = dispatch => ({
  changeSearchWord(searchWord) {
    dispatch(changeSearchWord(searchWord));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
