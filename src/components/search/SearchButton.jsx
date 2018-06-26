import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    flex: 2,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
});

const SearchButton = ({ searchWord, searchAndSetUses, classes }) => (
  <Button
    variant="contained"
    color="primary"
    className={classes.button}
    onClick={() => searchAndSetUses(searchWord)}
  >
    検索
    <SearchIcon className={classes.rightIcon} />
  </Button>
);

SearchButton.propTypes = {
  searchWord: PropTypes.string.isRequired,
  searchAndSetUses: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchButton);
