import React from 'react';
import styled from 'styled-components';

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
    return (
      <Container>
        <h1>Signin</h1>
        <div>ユーザー名</div>
        <Input
          type="text"
          value={this.state.userName}
          onChange={e => this.handleChangeUserName(e.target.value)}
        />
        <div>メールアドレス</div>
        <Input
          type="text"
          value={this.state.email}
          onChange={e => this.handleChangeEmail(e.target.value)}
        />
        <div>パスワード</div>
        <Input
          type="password"
          value={this.state.password}
          onChange={e => this.handleChangePassword(e.target.value)}
        />
        <SignupButton
          userName={this.state.userName}
          email={this.state.email}
          password={this.state.password}
        />
      </Container>
    );
  }
}
