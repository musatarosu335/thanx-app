import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  width: 300px;
  margin: 16px 0;
  display: flex;
  flex-direction: column;
`;

const Label = styled.div`
  font-size: 0.9rem;
  font-weight: bold;
  margin: 4px 0;
  color: #666;
`;

const Input = styled.input`
  width: 100%;
  height: 24px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const UserNameForm = () => (
  <Container>
    <Label>ユーザー名(必須)</Label>
    <Input type="text" />
  </Container>
);

UserNameForm.propTypes = {
  // classes: PropTypes.object.isRequired,
};

export default UserNameForm;
