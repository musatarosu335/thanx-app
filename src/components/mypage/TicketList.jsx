import React from 'react';
import styled from 'styled-components';

import Ticket from './Ticket';

const Container = styled.div`
  width: 100%;
`;

const TicketList = () => (
  <Container>
    <Ticket />
  </Container>
);

export default TicketList;
