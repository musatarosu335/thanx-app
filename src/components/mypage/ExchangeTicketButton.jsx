import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
});

const ExchangeTicketButton = ({
  ticketId,
  ticketPoint,
  userInfo,
  classes
}) => (
  <Button
    variant="contained"
    color="primary"
    className={classes.button}
    onClick={() => console.log(userInfo.point)}
  >
    交換する
  </Button>
);

ExchangeTicketButton.propTypes = {
  ticketId: PropTypes.string.isRequired,
  ticketPoint: PropTypes.number.isRequired,
  userInfo: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ExchangeTicketButton);
