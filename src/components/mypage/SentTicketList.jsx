import React from 'react';
import styled from 'styled-components';

import SentTicket from './SentTicket';

const Container = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
`;

const SentTicketList = () => (
  <Container>
    <SentTicket />
  </Container>
);

export default SentTicketList;
