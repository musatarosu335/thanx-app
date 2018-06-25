import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '90%',
  },
});

const SearchForm = ({ searchWord, changeSearchWord, classes }) => (
  <form className={classes.container} noValidate autoComplete="off">
    <TextField
      id="searchWord"
      label="SearchWord"
      className={classes.textField}
      value={searchWord}
      onChange={e => changeSearchWord(e.target.value)}
      margin="normal"
    />
  </form>
);

SearchForm.propTypes = {
  searchWord: PropTypes.string.isRequired,
  changeSearchWord: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchForm);
