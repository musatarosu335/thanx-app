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
  handleOpen,
  exchangeTicket,
  classes,
}) => {
  const userPoint = userInfo.point;
  const ticketPoint = ticket.point;
  const sign = Math.sign(userPoint - ticketPoint); // ポイントが足りない場合、ボタンを押させない

  return (
    <Button
      variant="contained"
      color="primary"
      className={classes.button}
      disabled={sign === -1}
      onClick={() => {
        handleOpen();
        exchangeTicket(ticket, userInfo.point, partnerUid);
      }}
    >
      交換する
    </Button>
  );
};

ExchangeTicketButton.propTypes = {
  ticket: PropTypes.object.isRequired,
  userInfo: PropTypes.object.isRequired,
  partnerUid: PropTypes.string.isRequired,
  exchangeTicket: PropTypes.func.isRequired,
  handleOpen: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ExchangeTicketButton);
