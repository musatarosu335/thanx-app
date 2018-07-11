import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import UserPanel from './UserPanel';

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const UserInfoTab = ({ userInfo, partnerInfo }) => (
  <Container>
    <UserPanel basicUserInfo={userInfo} />
    <UserPanel basicUserInfo={partnerInfo} />
  </Container>
);

UserInfoTab.propTypes = {
  userInfo: PropTypes.object.isRequired,
  partnerInfo: PropTypes.object.isRequired,
};

export default UserInfoTab;
