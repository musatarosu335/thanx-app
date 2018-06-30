import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = () => ({
  button: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
});

const CancelFollowButton = ({ followingUser, deleteFollowingAndFollowerUser, classes }) => (
  <Button
    variant="contained"
    color="secondary"
    className={classes.button}
    onClick={() => deleteFollowingAndFollowerUser(followingUser.uid)}
  >
    キャンセル
  </Button>
);

CancelFollowButton.propTypes = {
  followingUser: PropTypes.object.isRequired,
  deleteFollowingAndFollowerUser: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CancelFollowButton);
