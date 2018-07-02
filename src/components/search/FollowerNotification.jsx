import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Follower from './Follower';

const Container = styled.div`
  width: 100%;
  background-color: #F5F5F5;
`;

const Caption = styled.div`
  padding: 0.25em 0.5em;
  color: #494949;
  background: transparent;
  border-left: solid 5px #7db4e6;
`;

const FollowerNotification = ({ follower }) => (
  <Container>
    <Caption>リクエスト一覧</Caption>
    {follower.map((user, i) => (
      <Follower
        key={i}  // eslint-disable-line
        user={user}
      />
    ))}
  </Container>
);

FollowerNotification.propTypes = {
  follower: PropTypes.array.isRequired,
};

export default FollowerNotification;
