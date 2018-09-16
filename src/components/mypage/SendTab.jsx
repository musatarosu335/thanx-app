import React from 'react';
import styled from 'styled-components';

import PointArea from '../../containers/mypage/PointArea';
import PointSlider from '../../containers/mypage/PointSlider';
import MessageArea from '../../containers/mypage/MessageArea';
import SendPointButton from '../../containers/mypage/SendPointButton';
import SendPointDialog from './SendPointDialog';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
  margin: 16px;
  text-align: center;
  color: #565656;
  font-size: 1.1rem;
`;

export default class SendTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false, // Reduxで管理する必要なし
    };
  }

  handleClickOpen() {
    this.setState({ open: true });
  }

  handleClose() {
    this.setState({ open: false });
  }

  render() {
    const { open } = this.state;

    return (
      <Container>
        <Header>日頃の感謝をポイントとして送ろう！</Header>
        <PointArea />
        <PointSlider />
        <MessageArea />
        <SendPointButton handleClickOpen={() => this.handleClickOpen()} />
        <SendPointDialog open={open} handleClose={() => this.handleClose()} />
      </Container>
    );
  }
}
