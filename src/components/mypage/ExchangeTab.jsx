import React from 'react';
import styled from 'styled-components';

import TicketList from './TicketList';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  text-align: center;
`;

const ExchangeTab = () => (
  <Container>
    <Header>貯めたポイントをチケットと交換しよう！</Header>
    <TicketList />
  </Container>
);

export default ExchangeTab;
