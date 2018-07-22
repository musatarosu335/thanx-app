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
  ticket,
  userInfo,
  partnerUid,
  exchangeTicket,
  classes,
}) => (
  <Button
    variant="contained"
    color="primary"
    className={classes.button}
    onClick={() => exchangeTicket(ticket, userInfo.point, partnerUid)}
  >
    交換する
  </Button>
);

ExchangeTicketButton.propTypes = {
  ticket: PropTypes.object.isRequired,
  userInfo: PropTypes.object.isRequired,
  partnerUid: PropTypes.string.isRequired,
  exchangeTicket: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ExchangeTicketButton);
