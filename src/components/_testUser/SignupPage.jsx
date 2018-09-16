import React from 'react';
import styled from 'styled-components';

import LoginPage from './LoginPage';
import SignupButton from './SignupButton';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  border: 2px solid #F5F5F5;
  margin-bottom: 10px;
`;

export default class SignupPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      email: '',
      password: '',
    };
  }

  handleChangeUserName(value) {
    this.setState({
      userName: value,
    });
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
    const { userName, email, password } = this.state;

    return (
      <Container>
        <LoginPage />
        <h1>テストユーザー作成</h1>
        <div>ユーザー名</div>
        <Input
          type="text"
          value={userName}
          onChange={e => this.handleChangeUserName(e.target.value)}
        />
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
        <SignupButton
          userName={userName}
          email={email}
          password={password}
        />
      </Container>
    );
  }
}
