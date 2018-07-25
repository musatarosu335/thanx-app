import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
});

const ProcessTicketButton = ({ classes }) => (
  <Button
    variant="contained"
    color="primary"
    className={classes.button}
  >
    実行
  </Button>
);

ProcessTicketButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProcessTicketButton);
