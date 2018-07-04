import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import SearchForm from '../../containers/search/SearchForm';
import SearchResult from '../../containers/search/SearchResults';
import ApprovalPending from './ApprovalPending';

const Container = styled.div`
  width: 90%;
`;

const SearchTab = ({ followingUser }) => (
  <Container>
    <SearchForm />
    {Object.keys(followingUser).length
      ? <ApprovalPending />
      : <SearchResult />
    }
  </Container>
);

SearchTab.propTypes = {
  followingUser: PropTypes.object.isRequired,
};

export default SearchTab;
