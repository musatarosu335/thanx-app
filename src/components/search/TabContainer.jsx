import React from 'react';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import SearchTab from '../../containers/search/SearchTab';
import FollowerTab from './FollowerTab';

const styles = {
  root: {
    flexGrow: 1,
  },
};

const Container = styled.div`
  width: 100%;
`;

class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, value) {
    this.setState({ value });
  }

  render() {
    const { value } = this.state;

    return (
      <Container>
        <Tabs
          value={value}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="パートナーを見つける" />
          <Tab label="リクエスト一覧" />
        </Tabs>
        {value === 0 && <SearchTab />}
        {value === 1 && <FollowerTab />}
      </Container>
    );
  }
}

export default withStyles(styles)(SearchPage);
