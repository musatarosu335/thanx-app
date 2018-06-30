import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { lifecycle } from 'recompose';

import FollowerNotification from './FollowerNotification';
import SearchForm from '../../containers/search/SearchForm';
import SearchResult from '../../containers/search/SearchResults';
import ApprovalPending from './ApprovalPending';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
`;

const SearchPage = ({ followingUser }) => (
  // pairがいる場合はMyPageへリダイレクトさせる必要あり
  <Container>
    <h1>Search Page</h1>
    <p>説明をここに記述</p>
    <FollowerNotification />
    <SearchForm />
    {Object.keys(followingUser).length
      ? <ApprovalPending />
      : <SearchResult />
    }
  </Container>
);

SearchPage.propTypes = {
  followingUser: PropTypes.object.isRequired,
};

export default lifecycle({
  componentDidMount() {
    this.props.fetchAndSetFollowingUser();
  },
})(SearchPage);
