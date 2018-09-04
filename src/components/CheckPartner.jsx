import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { lifecycle } from 'recompose';

import LoadingSpinner from './common/LoadingSpinner';

const CheckPartner = ({ partnerUid, loading = true, children }) => {
  if (loading) {
    return <LoadingSpinner />;
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
  loading: PropTypes.bool,
  children: PropTypes.object.isRequired,
};

export default lifecycle({
  componentDidMount() {
    // パートナーのUIDとローディング状態を取得
    this.props.setPartnerUidAndLoading();
  },
})(CheckPartner);
