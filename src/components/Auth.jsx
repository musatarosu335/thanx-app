import firebase from 'firebase/app';
import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

export default class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uid: null,
      loading: true,
    };
  }

  componentDidMount() {
    const { setAuth } = this.props;

    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          uid: user.uid,
          loading: false,
        });
        // Header操作のため
        setAuth(true);
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
    const { uid, loading } = this.state;
    const { children } = this.props;

    if (loading) {
      return (
        <p>Now Loading.....</p>
      );
    }

    if (!uid) {
      return (
        <Redirect to="/login" />
      );
    }

    return (
      children
    );
  }
}

Auth.propTypes = {
  setAuth: PropTypes.func.isRequired,
  children: PropTypes.object.isRequired,
};
