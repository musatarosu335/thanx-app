import firebase from 'firebase/app';
import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

export default class CheckPair extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uid: null,
      // loading: true,
      loading: false,
    };
  }

  componentDidMount() {
    const { currentUser } = firebase.auth();
    const db = firebase.firestore();
    const docRef = db.collection('users').doc(currentUser.uid);

    docRef.get().then((doc) => {
      if (doc.pair) {
        console.log('true!');
      } else {
        console.log('false...');
      }
    }).catch((err) => {
      console.log(err);
    });
  }

  render() {
    if (this.state.loading) {
      return (
        <p>Now Loading...</p>
      );
    }

    if (!this.state.uid) {
      return (
        <Redirect to="/serch" />
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
