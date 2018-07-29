import React from 'react';
import styled from 'styled-components';

import TicketInfoTab from './TicketInfoTab';

const Container = styled.div`
  width: 100%;
  margin-top: 36px;
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(180, 180, 180, 0.48);
`;

const TicketInfo = () => (
  <Container>
    {/*
      <div>チケット情報</div>
    */}
    <TicketInfoTab />
  </Container>
);

export default TicketInfo;
