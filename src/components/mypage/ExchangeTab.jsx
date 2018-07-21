import React from 'react';
import styled from 'styled-components';

import TicketList from './TicketList';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const ExchangeTab = () => (
  <Container>
    <div>貯めたポイントをチケットと交換しよう！</div>
    <TicketList />
  </Container>
);

export default ExchangeTab;
