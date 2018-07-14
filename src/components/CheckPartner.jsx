import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { lifecycle } from 'recompose';

const CheckPartner = ({ partnerUid, loading, children }) => {
  if (loading) {
    return (
      <p>Now Loading...</p>
    );
  }

  if (!partnerUid) {
    return (
      <Redirect to="/search" />
    );
  }

  return (
    children
  );
};

CheckPartner.propTypes = {
  children: PropTypes.object.isRequired,
};

export default lifecycle({
  componentDidMount() {
    // パートナーのUIDとローディング状態を取得
    this.props.setPartnerUidAndLoading();
  },
})(CheckPartner);
