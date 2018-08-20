import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import DaylyPointList from './DaylyPointList';

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

const PointsPage = ({ match }) => {
  const { date } = match.params;

  return (
    <Container>
      <Header>{date} ポイント詳細</Header>
      <DaylyPointList date={date} />
    </Container>
  );
};

PointsPage.propTypes = {
  match: PropTypes.object.isRequired,
};

export default PointsPage;
