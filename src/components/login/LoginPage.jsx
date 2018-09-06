import firebase from 'firebase/app';
import firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
  margin: 16px;
`;

const Title = styled.h2`
  color: #333;
`;

const Description = styled.p`
  color: #666;
`;

export default class LoginPage extends React.Component {
  componentDidMount() {
    const ui = new firebaseui.auth.AuthUI(firebase.auth());
    const uiConfig = {
      callbacks: {
        signInSuccessWithAuthResult: (authResult, redirectUrl) => {
          return true;
        },
        uiShown: () => {
          document.getElementById('loader').style.display = 'none';
        },
      },
      // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
      signInFlow: 'popup',
      signInSuccessUrl: 'mypage',
      signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        // firebase.auth.EmailAuthProvider.PROVIDER_ID,
      ],
      // Terms of service url.
      tosUrl: 'terms',
      // Privacy policy url.
      privacyPolicyUrl: 'policy',
    };

    ui.start('#firebaseui-auth-container', uiConfig);
  }

  render() {
    return (
      <Container>
        <Title>ログイン</Title>
        <Description>SNSアカウントでログインできます。</Description>
        <div id="firebaseui-auth-container" />
        <div id="loader">Loading...</div>
      </Container>
    );
  }
}
