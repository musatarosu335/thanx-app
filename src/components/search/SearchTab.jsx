import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import SearchForm from '../../containers/search/SearchForm';
import SearchResult from '../../containers/search/SearchResults';
import ApprovalPending from './ApprovalPending';

const SearchTab = ({ followingUser }) => (
  <div>
    <SearchForm />
    {Object.keys(followingUser).length
      ? <ApprovalPending />
      : <SearchResult />
    }
  </div>
);

SearchTab.propTypes = {
  followingUser: PropTypes.object.isRequired,
};

export default SearchTab;
