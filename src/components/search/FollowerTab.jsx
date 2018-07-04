import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

import FollowerNotification from '../../containers/search/FollowerNotification';


const Container = styled.div`
  padding: 24px;
`;

const FollowerTab = () => (
  <Container>
    <FollowerNotification />
  </Container>
);

export default FollowerTab;
