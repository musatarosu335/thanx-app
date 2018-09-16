import React from 'react';
import styled from 'styled-components';

import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  border: 2px solid #F5F5F5;
  margin-bottom: 10px;
`;

export default class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleChangeEmail(value) {
    this.setState({
      email: value,
    });
  }

  handleChangePassword(value) {
    this.setState({
      password: value,
    });
  }

  render() {
    const { email, password } = this.state;

    return (
      <Container>
        <h1>テストユーザーログイン</h1>
        <div>メールアドレス</div>
        <Input
          type="text"
          value={email}
          onChange={e => this.handleChangeEmail(e.target.value)}
        />
        <div>パスワード</div>
        <Input
          type="password"
          value={password}
          onChange={e => this.handleChangePassword(e.target.value)}
        />
        <LoginButton
          email={email}
          password={password}
        />
        <LogoutButton />
      </Container>
    );
  }
}
