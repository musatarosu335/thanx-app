import firebase from 'firebase/app';
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';

const SpinerContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 0;
`;

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
        <SpinerContainer>
          <CircularProgress size={50} thickness={5} />
        </SpinerContainer>
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
