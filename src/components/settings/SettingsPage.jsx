import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import UserNameForm from '../../containers/settings/UserNameForm';
import ChangeSettingsButton from './ChangeSettingsButton';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.h2`
  text-align: center;
  color: #565656;
  font-size: 1.1rem;
`;

const SettingsPage = () => (
  <Container>
    <Header>ユーザー設定</Header>
    <Link to="/mypage">マイページ</Link>
    <UserNameForm />
    <ChangeSettingsButton />
  </Container>
);

SettingsPage.propTypes = {
  // match: PropTypes.object.isRequired,
};

export default SettingsPage;
