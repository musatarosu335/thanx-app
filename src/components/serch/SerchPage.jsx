import React from 'react';
import styled from 'styled-components';

import FollowerNotification from './FollowerNotification';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
`;

const SerchPage = () => (
  // pairがいる場合はMyPageへリダイレクトさせる必要あり
  <Container>
    <FollowerNotification />
    <div>SerchPage</div>
  </Container>
);

export default SerchPage;
