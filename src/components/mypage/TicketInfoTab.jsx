import React from 'react';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import ReceivedTicketList from '../../containers/mypage/ReceivedTicketList';
import SentTicketList from './SentTicketList';

const styles = {
  root: {
    flexGrow: 1,
  },
};

const Container = styled.div`
  width: 100%;
`;

class TicketInfoTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, value) {
    this.setState({ value });
  }

  render() {
    const { value } = this.state;

    return (
      <Container>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="受け取ったチケット" />
          <Tab label="送ったチケット" />
        </Tabs>
        {value === 0 && <ReceivedTicketList />}
        {value === 1 && <SentTicketList />}
      </Container>
    );
  }
}

export default withStyles(styles)(TicketInfoTab);
