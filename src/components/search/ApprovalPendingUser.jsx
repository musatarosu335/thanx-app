import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import CancelFollowButton from '../../containers/search/CancelFollowButton';
import UserAvatar from '../mypage/UserAvatar';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
    display: 'flex',
  }),
  userInfo: {
    flex: 3,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  userName: {
    fontSize: '1.1rem',
  },
  button: {
    flex: 2,
  },
});

const ApprovalPendingUser = ({ followingUser, classes }) => (
  <Paper className={classes.root} elevation={4}>
    <Typography component="div" className={classes.userInfo}>
      <UserAvatar photoURL={followingUser.photo_url} />
      <div className={classes.userName}>{followingUser.user_name}</div>
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
