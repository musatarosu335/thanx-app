import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import { lifecycle } from 'recompose';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import SearchTab from '../../containers/search/SearchTab';
import FollowerTab from './FollowerTab';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
`;

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
    const { value } = this.state;

    return (
      // pairがいる場合はMyPageへリダイレクトさせる必要あり
      <Container>
        <h1>Search Page</h1>
        <p>説明をここに記述</p>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="ペアを見つける" />
          <Tab label="リクエスト一覧" />
        </Tabs>
        {value === 0 && <SearchTab />}
        {value === 1 && <FollowerTab />}
      </Container>
    );
  }
}

SearchPage.propTypes = {
  fetchAndSetFollowingUser: PropTypes.func.isRequired,
  fetchAndSetFollower: PropTypes.func.isRequired,
};

export default withStyles(styles)(SearchPage);

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
