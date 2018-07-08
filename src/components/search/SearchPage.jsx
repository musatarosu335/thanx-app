import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { lifecycle } from 'recompose';

import TabContainer from './TabContainer';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
`;

/*
class SearchPage extends React.Component {
  componentDidMount() {
    // フォローしているユーザの取得
    this.props.fetchAndSetFollowingUser();
    // フォロワー一覧の取得
    this.props.fetchAndSetFollower();
  }

  render() {
    return (
      // pairがいる場合はMyPageへリダイレクトさせる必要あり
      <Container>
        <h1>Search Page</h1>
        <p>説明をここに記述</p>
        <TabContainer />
      </Container>
    );
  }
}
*/

const SearchPage = () => (
  // pairがいる場合はMyPageへリダイレクトさせる必要あり
  <Container>
    <h1>Search Page</h1>
    <p>説明をここに記述</p>
    <TabContainer />
  </Container>
);

export default lifecycle({
  componentDidMount() {
    // フォローしているユーザの取得
    this.props.fetchAndSetFollowingUser(); // PropTypes.func.isRequired
    // フォロワー一覧の取得
    this.props.fetchAndSetFollower(); // PropTypes.func.isRequired
  },
})(SearchPage);
