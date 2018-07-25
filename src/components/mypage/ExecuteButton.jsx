import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
});

const ExecuteButton = ({ documentId, classes }) => (
  <Button
    variant="contained"
    color="primary"
    className={classes.button}
  >
    実行
  </Button>
);

ExecuteButton.propTypes = {
  documentId: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ExecuteButton);
