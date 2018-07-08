import firebase from 'firebase/app';
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  background-color: #ddd;
`;

export default class SignupButton extends React.Component {
  handleSubmit() {
    const { userName, email, password } = this.props;

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((user) => {
        // ユーザをFirestoreに追加
        const db = firebase.firestore();
        db.collection('users').doc(user.user.uid).set({
          user_name: userName,
          email,
          pair: '',
          point: 0,
          create_on: new Date(),
        })
          .then(() => {
            console.log('Success write user info'); // eslint-disable-line no-console
          })
          .catch((err) => {
            console.log(err); // eslint-disable-line no-console
          });
      })
      .catch((error) => {
        console.log(error.code); // eslint-disable-line no-console
        console.log(error.message); // eslint-disable-line no-console
      });
  }

  render() {
    return (
      <Button onClick={() => this.handleSubmit()}>
        登録
      </Button>
    );
  }
}

SignupButton.propTypes = {
  userName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
};
