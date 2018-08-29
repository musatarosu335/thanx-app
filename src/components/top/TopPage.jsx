import React from 'react';
import { Redirect } from 'react-router-dom';
import firebase from 'firebase/app';

import Landing from './Landing';

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
      return <p>Now Loading..</p>;
    }

    if (!auth) {
      return <Landing />;
    }

    return (
      <Redirect to="mypage" />
    );
  }
}
