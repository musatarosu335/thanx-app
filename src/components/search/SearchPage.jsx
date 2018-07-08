import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { lifecycle } from 'recompose';
import { Redirect } from 'react-router-dom';

import TabContainer from './TabContainer';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
`;

const SearchPage = ({ pairUid }) => {
  let isPairComponent;

  if (pairUid === 'no') {
    isPairComponent = <TabContainer />;
  } else if (!pairUid) {
    isPairComponent = <p>Now loading...</p>;
  } else {
    isPairComponent = <Redirect to="/mypage" />;
  }

  return (
    <Container>
      <h1>Search Page</h1>
      <p>説明をここに記述</p>
      {isPairComponent}
    </Container>
  );
};

SearchPage.propTypes = {
  pairUid: PropTypes.string.isRequired,
};

export default lifecycle({
  componentDidMount() {
    // ペアのUIDを取得
    this.props.checkPair();
    // フォローしているユーザの取得
    this.props.fetchAndSetFollowingUser(); // PropTypes.func.isRequired
    // フォロワー一覧の取得
    this.props.fetchAndSetFollower(); // PropTypes.func.isRequired
  },
})(SearchPage);
