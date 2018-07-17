import React from 'react';
import styled from 'styled-components';

import PointArea from './PointArea';
import PointSlider from '../../containers/mypage/PointSlider';
import MessageArea from '../../containers/mypage/MessageArea';
import SendPointButton from './SendPointButton';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SendTab = () => (
  <Container>
    <PointArea />
    <PointSlider />
    <MessageArea />
    <SendPointButton />
  </Container>
);

export default SendTab;
