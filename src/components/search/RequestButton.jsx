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

const RequestButton = ({ uid, writeFollowingAndFollowerUser, classes }) => (
  <Button
    variant="contained"
    className={classes.button}
    onClick={() => writeFollowingAndFollowerUser(uid)}
  >
    リクエスト
  </Button>
);

RequestButton.propTypes = {
  uid: PropTypes.string.isRequired,
  writeFollowingAndFollowerUser: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RequestButton);
