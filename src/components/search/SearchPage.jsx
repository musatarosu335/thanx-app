import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { lifecycle } from 'recompose';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

import FollowerNotification from '../../containers/search/FollowerNotification';
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

/*
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
*/

const TabContainer = (props) => {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
};

const styles = {
  root: {
    flexGrow: 1,
  },
};

class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    // フォローしているユーザの取得
    this.props.fetchAndSetFollowingUser();
    // フォロワー一覧の取得
    this.props.fetchAndSetFollower();
  }

  handleChange(event, value) {
    this.setState({ value });
  }

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <Container>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
        </Tabs>
        {value === 0 && <TabContainer>Item One</TabContainer>}
        {value === 1 && <TabContainer>Item Two</TabContainer>}
        {value === 2 && <TabContainer>Item Three</TabContainer>}
      </Container>
    );
  }
}

export default withStyles(styles)(SearchPage);

/*
SearchPage.propTypes = {
  followingUser: PropTypes.object.isRequired,
};
*/

/*
export default lifecycle({
  componentDidMount() {
    // フォローしているユーザの取得
    this.props.fetchAndSetFollowingUser();
    // フォロワー一覧の取得
    this.props.fetchAndSetFollower();
  },
})(SearchPage);
*/
