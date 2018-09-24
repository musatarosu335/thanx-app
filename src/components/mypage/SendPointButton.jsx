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


const SendPointButton = ({
  point,
  sendPointAndMessage,
  handleClickOpen,
  classes,
}) => (
  <Button
    variant="contained"
    color="primary"
    disabled={point === 0}
    className={classes.button}
    onClick={() => {
      handleClickOpen();
      sendPointAndMessage();
    }}
  >
    ポイントを送る
    <SendIcon className={classes.rightIcon} />
  </Button>
);

SendPointButton.propTypes = {
  point: PropTypes.number.isRequired,
  sendPointAndMessage: PropTypes.func.isRequired,
  handleClickOpen: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SendPointButton);
