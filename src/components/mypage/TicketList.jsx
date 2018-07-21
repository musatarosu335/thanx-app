import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';

import Ticket from './Ticket';

const Container = styled.div`
  width: 100%;
`;

const TicketList = ({ tickets }) => (
  <Container>
    <Grid container spacing={8}>
      {tickets.map((ticket, i) => (
        // eslint-disable-next-line
        <Grid item xs={6} sm={4} key={i}>
          <Ticket ticket={ticket} />
        </Grid>
      ))}
    </Grid>
  </Container>
);

TicketList.propTypes = {
  tickets: PropTypes.array.isRequired,
};

export default TicketList;
