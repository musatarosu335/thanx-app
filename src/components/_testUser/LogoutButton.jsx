import firebase from 'firebase/app';
import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  padding: 8px;
  margin: 20px;
  background-color: #333;
`;

const handleClick = () => {
  firebase.auth().signOut()
    .then(() => {
      console.log('Logout'); // eslint-disable-line no-console
    })
    .catch((error) => {
      console.log(error.code); // eslint-disable-line no-console
      console.log(error.message); // eslint-disable-line no-console
    });
};

const LogoutButton = () => (
  <Button onClick={() => handleClick()}>
    LOGOUT
  </Button>
);

export default LogoutButton;
