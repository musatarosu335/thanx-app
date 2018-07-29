import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Alert from '../common/Alert';
import SentTicket from './SentTicket';

const Container = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
`;

const SentTicketList = ({ sentTickets }) => {
  if (sentTickets.length === 0) {
    return (
      <Alert>あなたが送ったチケットはありません。</Alert>
    );
  }

  return (
    <Container>
      {sentTickets.map((sentTicket, i) => (
        <SentTicket
          key={i} // eslint-disable-line
          sentTicket={sentTicket}
        />
      ))}
    </Container>
  );
};

SentTicketList.propTypes = {
  sentTickets: PropTypes.array.isRequired,
};

export default SentTicketList;
