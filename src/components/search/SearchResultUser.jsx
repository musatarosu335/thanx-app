import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
    display: 'flex',
  }),
});

const SearchResultUser = ({ user, classes }) => (
  <Paper className={classes.root} elevation={4}>
    <Typography component="p">
      {user}
    </Typography>
  </Paper>
);

SearchResultUser.propTypes = {
  user: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchResultUser);
