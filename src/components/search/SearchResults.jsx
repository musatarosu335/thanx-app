import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid;
  width: 100%;
`;

const SearchResults = ({ searchResultUsers }) => (
  <Container>
    {searchResultUsers[0]}
  </Container>
);

SearchResults.propTypes = {
  searchResultUsers: PropTypes.array.isRequired,
};

export default SearchResults;
