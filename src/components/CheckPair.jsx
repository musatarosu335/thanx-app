import React from 'react';
import PropTypes from 'prop-types';

export default class CheckPair extends React.Component {
  render() {
    return (
      this.props.children
    );
  }
}

CheckPair.propTypes = {
  children: PropTypes.object.isRequired,
};
