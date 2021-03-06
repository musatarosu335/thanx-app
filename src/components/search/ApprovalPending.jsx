import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

import ApprovalPendingUser from '../../containers/search/ApprovalPendingUser';

const Container = styled.div`
  width: 100%;
  background-color: #F5F5F5;
`;

const Description = styled.div`
  text-align: center;
`;

const Caption = styled.div`
  padding: 0.25em 0.5em;
  color: #494949;
  background: transparent;
  border-left: solid 5px #7db4e6;
`;

const ApprovalPending = () => (
  <Container>
    <Caption>承認待ちユーザ</Caption>
    <Description>ユーザからの承認を待ちましょう</Description>
    <ApprovalPendingUser />
  </Container>
);

export default ApprovalPending;
