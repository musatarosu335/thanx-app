import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
});

const ExecuteButton = ({
  documentId,
  executeTicket,
  handleOpenDialog,
  classes,
}) => (
  <Button
    variant="contained"
    color="primary"
    className={classes.button}
    onClick={() => {
      executeTicket(documentId);
      handleOpenDialog();
    }}
  >
    実行
  </Button>
);

ExecuteButton.propTypes = {
  documentId: PropTypes.string.isRequired,
  executeTicket: PropTypes.func.isRequired,
  handleOpenDialog: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ExecuteButton);
