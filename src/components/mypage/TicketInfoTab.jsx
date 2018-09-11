import React from 'react';
import styled from 'styled-components';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import ReceivedTicketList from '../../containers/mypage/ReceivedTicketList';
import SentTicketList from '../../containers/mypage/SentTicketList';

const Container = styled.div`
  position: relative;
  width: 100%;

  &::after {
    position: absolute;
    font-family: "Font Awesome 5 Free",'Quicksand','Avenir','Arial',sans-serif;
    content: 'チケット情報';
    background: #2196F3;
    color: #fff;
    left: 4px;
    bottom: 100%;
    border-radius: 5px 5px 0 0;
    padding: 6px 16px 6px;
    font-size: 0.9rem;
    line-height: 1;
    letter-spacing: 0.05rem;
  }
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
          value={value}
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

export default TicketInfoTab;
