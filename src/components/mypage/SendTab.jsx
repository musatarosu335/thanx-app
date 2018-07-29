import React from 'react';
import styled from 'styled-components';

import PointArea from '../../containers/mypage/PointArea';
import PointSlider from '../../containers/mypage/PointSlider';
import MessageArea from '../../containers/mypage/MessageArea';
import SendPointButton from '../../containers/mypage/SendPointButton';

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

const SendTab = () => (
  <Container>
    <Header>日頃の感謝をポイントとして送ろう！</Header>
    <PointArea />
    <PointSlider />
    <MessageArea />
    <SendPointButton />
  </Container>
);

export default SendTab;
