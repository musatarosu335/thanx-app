import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Snackbar from '@material-ui/core/Snackbar';

import UserNameForm from '../../containers/settings/UserNameForm';
import ChangeSettingsButton from '../../containers/settings/ChangeSettingsButton';

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

const SnackbarMessage = styled.span`
  text-align: center;
`;

const SettingsPage = ({ isOpenSnackbar, toggleSnackbar }) => (
  <Container>
    <Header>ユーザー設定</Header>
    <UserNameForm />
    <ChangeSettingsButton />
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={isOpenSnackbar}
      onClose={() => toggleSnackbar(false)}
      ContentProps={{
        'aria-describedby': 'message-id',
      }}
      message={<SnackbarMessage id="message-id">ユーザー設定を変更しました。</SnackbarMessage>}
    />
  </Container>
);

SettingsPage.propTypes = {
  isOpenSnackbar: PropTypes.bool.isRequired,
  toggleSnackbar: PropTypes.func.isRequired,
};

export default SettingsPage;
