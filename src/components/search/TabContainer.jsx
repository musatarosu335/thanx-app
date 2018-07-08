import React from 'react';
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
      <div>
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
      </div>
    );
  }
}

export default withStyles(styles)(SearchPage);
