import firebase from 'firebase/app';
import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

export default class CheckPair extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pair: '',
      loading: true,
    };
  }

  componentDidMount() {
    const { currentUser } = firebase.auth();
    const db = firebase.firestore();
    const docRef = db.collection('users').doc(currentUser.uid);

    docRef.get().then((doc) => {
      if (doc.data().pair) {
        this.setState({
          pair: true,
          loading: false,
        });
      } else {
        this.setState({
          loading: false,
        });
      }
    }).catch((err) => {
      console.log(err); // eslint-disable-line
    });
  }

  render() {
    if (this.state.loading) {
      return (
        <p>Now Loading...</p>
      );
    }

    if (!this.state.pair) {
      return (
        <Redirect to="/search" />
      );
    }

    return (
      this.props.children
    );
  }
}

CheckPair.propTypes = {
  children: PropTypes.object.isRequired,
};
