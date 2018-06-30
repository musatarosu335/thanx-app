import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import SearchButton from '../../containers/search/SearchButton';

const styles = theme => ({
  container: {
    display: 'flex',
    alignItems: 'baseLine',
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

const SearchForm = ({
  searchWord,
  followingUser,
  changeSearchWord,
  classes,
}) => (
  <form className={classes.container} noValidate autoComplete="off">
    <TextField
      id="searchWord"
      label={Object.keys(followingUser).length ? '検索できません' : 'ユーザー名で検索'}
      error={Object.keys(followingUser).length ? true : null}
      margin="normal"
      className={classes.textField}
      value={searchWord}
      disabled={Object.keys(followingUser).length ? true : null}
      onChange={e => changeSearchWord(e.target.value)}
    />
    <SearchButton searchWord={searchWord} />
  </form>
);

SearchForm.propTypes = {
  searchWord: PropTypes.string.isRequired,
  followingUser: PropTypes.object.isRequired,
  changeSearchWord: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchForm);
