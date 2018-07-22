import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import UserPanel from './UserPanel';
import TicketInfo from './TicketInfo';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const UserContainer = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
  justify-content: space-around;
`;

const UserInfoTab = ({ userInfo, partnerInfo }) => (
  <Container>
    <UserContainer>
      <UserPanel basicUserInfo={userInfo} />
      <UserPanel basicUserInfo={partnerInfo} />
    </UserContainer>
    <TicketInfo />
  </Container>
);

UserInfoTab.propTypes = {
  userInfo: PropTypes.object.isRequired,
  partnerInfo: PropTypes.object.isRequired,
};

export default UserInfoTab;
