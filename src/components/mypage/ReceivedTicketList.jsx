import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ReceivedTicket from './ReceivedTicket';

/*
Gridレイアウトにした方が良さそう
*/

const Container = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
`;

const ReceivedTicketList = () => (
  <Container>
    <ReceivedTicket />
    <ReceivedTicket />
    <ReceivedTicket />
  </Container>
);

export default ReceivedTicketList;
