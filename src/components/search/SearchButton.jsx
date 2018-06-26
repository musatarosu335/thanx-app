import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const styles = () => ({
  button: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
});

const SearchButton = ({ searchWord, searchAndSetUses, classes }) => (
  <IconButton
    className={classes.button}
    aria-label="Delete"
    onClick={() => searchAndSetUses(searchWord)}
  >
    <SearchIcon />
  </IconButton>
);

SearchButton.propTypes = {
  searchWord: PropTypes.string.isRequired,
  searchAndSetUses: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchButton);
