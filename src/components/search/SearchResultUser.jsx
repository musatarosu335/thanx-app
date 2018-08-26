import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import RequestButton from '../../containers/search/RequestButton';
import UserAvatar from '../mypage/UserAvatar';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
    display: 'flex',
    alignItems: 'center',
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

const SearchResultUser = ({ user, classes }) => (
  <Paper className={classes.root} elevation={4}>
    <Typography component="div" className={classes.userInfo}>
      <UserAvatar photoURL={user.photo_url} />
      <div className={classes.userName}>{user.user_name}</div>
    </Typography>
    <RequestButton
      className={classes.button}
      uid={user.uid}
    />
  </Paper>
);

SearchResultUser.propTypes = {
  user: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchResultUser);
