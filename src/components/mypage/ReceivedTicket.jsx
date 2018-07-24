import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import toDateString from '../../func/toDateString';

const styles = () => ({
  root: {
    margin: 8,
    display: 'flex',
  },
});

const TicketLeft = styled.div`
  flex: 2;
  margin: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TicketRight = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 2px dashed rgba(180, 180, 180, 0.48);
`;

const TicketName = styled.div`
  font-weight: bold;
  flex: 1;
  text-align: center;
`;

const TicketDate = styled.div`
  flex: 1;
  font-size: 0.7rem;
  font-style: oblique;
  color: #999999;
`;

const ReceivedTicket = ({ receivedTicket, classes }) => (
  <Paper className={classes.root} elevation={1}>
    <TicketLeft>
      <TicketName>
        {receivedTicket.ticket_name}
      </TicketName>
      <TicketDate>
        {toDateString(receivedTicket.exchange_time)}
      </TicketDate>
    </TicketLeft>
    <TicketRight>
      ボタン
    </TicketRight>
  </Paper>
);

ReceivedTicket.propTypes = {
  receivedTicket: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ReceivedTicket);
