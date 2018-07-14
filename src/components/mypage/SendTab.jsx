import React from 'react';
import styled from 'styled-components';

import PointArea from './PointArea';
import PointSlider from './PointSlider';
import MessageArea from './MessageArea';

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
  </Container>
);

export default SendTab;
