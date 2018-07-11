import React from 'react';
import styled from 'styled-components';

import UserPanel from './UserPanel';

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const UserInfoTab = () => (
  <Container>
    <UserPanel />
    <UserPanel />
  </Container>
);

export default UserInfoTab;
