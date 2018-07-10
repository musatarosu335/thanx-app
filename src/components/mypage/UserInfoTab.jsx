import React from 'react';
import styled from 'styled-components';

import MyPanel from './MyPanel';
import PartnerPanel from './PartnerPanel';

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const UserInfoTab = () => (
  <Container>
    <MyPanel />
    <PartnerPanel />
  </Container>
);

export default UserInfoTab;
