import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
});

const ExecuteButton = ({ documentId, executeAndReacquireTicketList, classes }) => (
  <Button
    variant="contained"
    color="primary"
    className={classes.button}
    onClick={() => executeAndReacquireTicketList(documentId)}
  >
    実行
  </Button>
);

ExecuteButton.propTypes = {
  documentId: PropTypes.string.isRequired,
  executeAndReacquireTicketList: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ExecuteButton);
