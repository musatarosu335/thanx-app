import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Alert from '../common/Alert';
import ReceivedTicket from './ReceivedTicket';
import ExecuteTicketDialog from './ExecuteTicketDialog';

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


class ReceivedTicketList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openDialog: false,
    };
  }

  handleOpenDialog() {
    this.setState({ openDialog: true });
  }

  handleCloseDialog() {
    this.setState({ openDialog: false });
  }

  render() {
    const { receivedTickets } = this.props;
    const { openDialog } = this.state;

    if (receivedTickets.length === 0) {
      return (
        <div>
          <Alert>現在受け取っているチケットはありません。</Alert>
          <ExecuteTicketDialog
            open={openDialog}
            handleClose={() => this.handleCloseDialog()}
          />
        </div>
      );
    }

    return (
      <Container>
        {receivedTickets.map((receivedTicket, i) => (
          <ReceivedTicket
            key={i} // eslint-disable-line
            receivedTicket={receivedTicket}
            handleOpenDialog={() => this.handleOpenDialog()}
          />
        ))}
        <ExecuteTicketDialog
          open={openDialog}
          handleClose={() => this.handleCloseDialog()}
        />
      </Container>
    );
  }
}

ReceivedTicketList.propTypes = {
  receivedTickets: PropTypes.array.isRequired,
};

export default ReceivedTicketList;
