import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import toDateString from '../../func/toDateString';

const styles = () => ({
  root: {
    margin: 8,
    padding: 8,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const TicketName = styled.div`
  font-weight: bold;
  flex: 1;
  text-align: center;
  margin: 8px;
`;

const TicketDate = styled.div`
  flex: 1;
  text-align: center;
  font-size: 0.7rem;
  font-style: oblique;
  color: #999999;
`;

const SentTicket = ({ sentTicket, classes }) => (
  <Paper className={classes.root} elevation={1}>
    <TicketName>
      {sentTicket.ticket_name}
    </TicketName>
    <TicketDate>
      {toDateString(sentTicket.exchange_time)}
    </TicketDate>
  </Paper>
);

SentTicket.propTypes = {
  sentTicket: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SentTicket);
