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

const SearchButton = ({ classes }) => (
  <IconButton className={classes.button} aria-label="Delete">
    <SearchIcon />
  </IconButton>
);

SearchButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchButton);
