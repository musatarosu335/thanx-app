import React from 'react';
import styled from 'styled-components';
import CircularProgress from '@material-ui/core/CircularProgress';

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 0;
`;

const LoadingSpinner = () => (
  <Container>
    <CircularProgress size={50} thickness={5} />
  </Container>
);

export default LoadingSpinner;
