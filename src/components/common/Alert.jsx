import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  margin: 24px;
  padding: 16px;
  background-color: #dff0d8;
  border-color: #d0e9c6;
  color: #3c763d;
`;

const Alert = ({ children }) => (
  <Container>
    {children}
  </Container>
);

Alert.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Alert;
