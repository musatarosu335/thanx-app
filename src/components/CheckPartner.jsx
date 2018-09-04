import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import { lifecycle } from 'recompose';
import CircularProgress from '@material-ui/core/CircularProgress';

const SpinerContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 0;
`;

const CheckPartner = ({ partnerUid, loading = true, children }) => {
  if (loading) {
    return (
      <SpinerContainer>
        <CircularProgress size={50} thickness={5} />
      </SpinerContainer>
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
  loading: PropTypes.bool,
  children: PropTypes.object.isRequired,
};

export default lifecycle({
  componentDidMount() {
    // パートナーのUIDとローディング状態を取得
    this.props.setPartnerUidAndLoading();
  },
})(CheckPartner);
