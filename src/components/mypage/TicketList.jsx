import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';

import Ticket from './Ticket';

const Container = styled.div`
  width: 100%;
`;

const testTicket = ['Ticket1', 'Ticket2', 'Ticket3'];

const TicketList = () => (
  <Container>
    <Grid container spacing={24}>
      {testTicket.map((ticket, i) => (
        // eslint-disable-next-line
        <Grid item xs={6} sm={3} key={i}>
          <Ticket ticketName={ticket} />
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default TicketList;
