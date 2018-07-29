import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ReceivedTicket from './ReceivedTicket';

/*
Gridレイアウトにした方が良さそう
*/

/*
receivedTicketsが空の時の処理も記述する必要あり
*/

const Container = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
`;

const ReceivedTicketList = ({ receivedTickets }) => (
  <Container>
    {receivedTickets.map((receivedTicket, i) => (
      <ReceivedTicket
        key={i} // eslint-disable-line
        receivedTicket={receivedTicket}
      />
    ))}
  </Container>
);

ReceivedTicketList.propTypes = {
  receivedTickets: PropTypes.array.isRequired,
};

export default ReceivedTicketList;
