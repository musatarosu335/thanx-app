import React from 'react';
import styled from 'styled-components';

import FollowerNotification from '../../containers/search/FollowerNotification';


const Container = styled.div`
  margin-top: 24px;
`;

const FollowerTab = () => (
  <Container>
    <FollowerNotification />
  </Container>
);

export default FollowerTab;
