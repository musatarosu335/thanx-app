import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import CancelFollowButton from './CancelFollowButton';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
    display: 'flex',
  }),
  userName: {
    flex: 3,
    textAlign: 'center',
  },
  message: {
    fontSize: '0.7rem',
    color: '#90949D',
  },
  button: {
    flex: 2,
  },
});

const ApprovalPendingUser = ({ followingUser, classes }) => (
  <Paper className={classes.root} elevation={4}>
    <Typography component="div" className={classes.userName}>
      {followingUser.user_name}
      <br />
      <div className={classes.message}>This is message!</div>
    </Typography>
    <CancelFollowButton
      className={classes.button}
    />
  </Paper>
);

ApprovalPendingUser.propTypes = {
  followingUser: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ApprovalPendingUser);
