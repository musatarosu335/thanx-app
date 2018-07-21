import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
});

const ExchangeTicketButton = ({ classes }) => (
  <Button
    variant="contained"
    color="primary"
    className={classes.button}
    // onClick={() => sendPointAndMessage()}
  >
    交換する
  </Button>
);

ExchangeTicketButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ExchangeTicketButton);