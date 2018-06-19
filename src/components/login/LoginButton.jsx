import firebase from 'firebase/app';
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  background-color: #ddd;
`;

export default class LoginButton extends React.Component {
  handleSubmit() {
    const { email, password } = this.props;

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((user) => {
        console.log(`Success Login! ${user}`); // eslint-disable-line no-console
        /*
        this.setState({
          redirect: true,
        });
        */
      })
      .catch((error) => {
        console.log(error.code); // eslint-disable-line no-console
        console.log(error.messagesage); // eslint-disable-line no-console
      });
  }

  render() {
    return (
      <Button onClick={() => this.handleSubmit()}>
        ログイン
      </Button>
    );
  }
}

LoginButton.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
};
