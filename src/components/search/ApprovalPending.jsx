import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ApprovalPendingUser from './ApprovalPendingUser';

const Container = styled.div`
  width: 100%;
  background-color: #F5F5F5;
`;

const Caption = styled.div`
  margin: 10px;
`;

const ApprovalPending = () => (
  <Container>
    <Caption>承認待ちユーザ</Caption>
    <ApprovalPendingUser />
  </Container>
);

export default ApprovalPending;
