import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  border: 4px solid #82636b;
  border-radius: 240px 15px 185px 15px / 15px 200px 15px 185px;
  margin: 2em 0;
  padding: 1em 2em;
  font-size: 1.4rem;
  font-weight: bold;
`;

const PointArea = ({ point }) => (
  <Container>
    {point}pt
  </Container>
);

PointArea.propTypes = {
  point: PropTypes.number.isRequired,
};

export default PointArea;
