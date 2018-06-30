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

const CancelFollowButton = ({ classes }) => (
  <Button
    variant="contained"
    color="secondary"
    className={classes.button}
    // onClick={() => writeFollowingAndFollowerUser(uid)}
  >
    キャンセル
  </Button>
);

CancelFollowButton.propTypes = {
  // uid: PropTypes.string.isRequired,
  // writeFollowingAndFollowerUser: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CancelFollowButton);
