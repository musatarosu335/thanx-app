import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import SearchResultUser from './SearchResultUser';

const Container = styled.div`
  width: 100%;
  background-color: #F5F5F5;
`;

const Caption = styled.div`
  padding: 0.25em 0.5em;
  color: #494949;
  background: transparent;
  border-left: solid 5px #7db4e6;
`;

const SearchResults = ({ searchResultUsers }) => (
  <Container>
    <Caption>検索結果</Caption>
    {searchResultUsers.map((user, i) => (
      <SearchResultUser
        key={i}  // eslint-disable-line
        user={user}
      />
    ))}
  </Container>
);

SearchResults.propTypes = {
  searchResultUsers: PropTypes.array.isRequired,
};

export default SearchResults;
