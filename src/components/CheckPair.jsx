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
    console.log('Check...');
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
