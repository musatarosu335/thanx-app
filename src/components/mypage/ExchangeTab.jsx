import React from 'react';
import styled from 'styled-components';

import TicketList from '../../containers/mypage/TicketList';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  margin: 16px;
  text-align: center;
  color: #565656;
  font-size: 1.1rem;
`;

const ExchangeTab = () => (
  <Container>
    <Header>貯めたポイントをチケットと交換しよう！</Header>
    <TicketList />
  </Container>
);

export default ExchangeTab;
