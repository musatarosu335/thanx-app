import React from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import firebase from 'firebase/app';
import CircularProgress from '@material-ui/core/CircularProgress';

import Landing from './Landing';

const SpinerContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 0;
`;

export default class TopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: false,
      loading: true,
    };
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const isLogin = true;
        this.setState({
          auth: isLogin,
          loading: false,
        });
      } else {
        this.setState({
          loading: false,
        });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const { auth, loading } = this.state;

    if (loading) {
      return (
        <SpinerContainer>
          <CircularProgress size={50} thickness={5} />
        </SpinerContainer>
      );
    }

    if (!auth) {
      return <Landing />;
    }

    return (
      <Redirect to="mypage" />
    );
  }
}
