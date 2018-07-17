import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SendIcon from '@material-ui/icons/Send';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
});

const SendPointButton = ({ sendPointAndMessage, classes }) => (
  <Button
    variant="contained"
    color="primary"
    className={classes.button}
    onClick={() => sendPointAndMessage()}
  >
    ポイントを送る
    <SendIcon className={classes.rightIcon} />
  </Button>
);

SendPointButton.propTypes = {
  sendPointAndMessage: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SendPointButton);
