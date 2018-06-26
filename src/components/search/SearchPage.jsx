import React from 'react';
import styled from 'styled-components';

import FollowerNotification from './FollowerNotification';
import SearchForm from '../../containers/search/SearchForm';
import SearchResult from '../../containers/search/SearchResults';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
`;

const SearchPage = () => (
  // pairがいる場合はMyPageへリダイレクトさせる必要あり
  <Container>
    <h1>Search Page</h1>
    <p>説明をここに記述</p>
    <FollowerNotification />
    <SearchForm />
    <SearchResult />
  </Container>
);

export default SearchPage;
