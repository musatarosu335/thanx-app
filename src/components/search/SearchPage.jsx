import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { lifecycle } from 'recompose';
import { Redirect } from 'react-router-dom';

import CurrenUserPanel from './CurrentUserPanel';
import TabContainer from './TabContainer';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
`;

const Title = styled.h2`
  color: #333;
`;

const SearchPage = ({ partnerUid }) => {
  let isPartnerComponent;

  if (!partnerUid) {
    isPartnerComponent = <TabContainer />;
  } else {
    isPartnerComponent = <Redirect to="/mypage" />;
  }

  return (
    <Container>
      <Title>パートナー検索</Title>
      <CurrenUserPanel />
      {isPartnerComponent}
    </Container>
  );
};

SearchPage.propTypes = {
  partnerUid: PropTypes.string.isRequired,
};

export default lifecycle({
  componentDidMount() {
    // ペアのUIDを取得
    this.props.checkPartner();
    // フォローしているユーザの取得
    this.props.fetchAndSetFollowingUser(); // PropTypes.func.isRequired
    // フォロワー一覧の取得
    this.props.fetchAndSetFollower(); // PropTypes.func.isRequired
  },
})(SearchPage);
