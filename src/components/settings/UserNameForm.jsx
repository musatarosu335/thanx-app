import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { lifecycle } from 'recompose';

const Container = styled.div`
  width: 300px;
  margin: 16px 0;
  display: flex;
  flex-direction: column;
`;

const Label = styled.div`
  font-weight: bold;
  margin: 4px 0;
  color: #666;
`;

const Input = styled.input`
  width: 100%;
  height: 24px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 4px;
  font-size: 1rem;
`;

const UserNameForm = ({ userName, changeUserName }) => (
  <Container>
    <Label>ユーザー名(必須)</Label>
    <Input
      type="text"
      value={userName}
      onChange={e => changeUserName(e.target.value)}
    />
  </Container>
);

UserNameForm.propTypes = {
  userName: PropTypes.string.isRequired,
  changeUserName: PropTypes.func.isRequired,
};

export default lifecycle({
  componentDidMount() {
    this.props.fetchUserName();
  },
})(UserNameForm);
