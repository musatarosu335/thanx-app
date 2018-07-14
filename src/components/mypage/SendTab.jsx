import React from 'react';
import styled from 'styled-components';

import PointSlider from './PointSlider';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SendTab = () => (
  <Container>
    <PointSlider />
  </Container>
);

export default SendTab;
