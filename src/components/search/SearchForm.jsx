import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import SearchButton from '../../containers/search/SearchButton';

const styles = theme => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    // width: '100%',
    flex: 5,
  },
});

const SearchForm = ({ searchWord, changeSearchWord, classes }) => (
  <form className={classes.container} noValidate autoComplete="off">
    <TextField
      id="searchWord"
      label="ユーザー名で検索"
      className={classes.textField}
      value={searchWord}
      onChange={e => changeSearchWord(e.target.value)}
      margin="normal"
    />
    <SearchButton searchWord={searchWord} />
  </form>
);

SearchForm.propTypes = {
  searchWord: PropTypes.string.isRequired,
  changeSearchWord: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchForm);
