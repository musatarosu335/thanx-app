import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PeopleIcon from '@material-ui/icons/People';
import SendIcon from '@material-ui/icons/Send';
import GiftIcon from '@material-ui/icons/CardGiftcard';

export default class MyPage extends React.Component {
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
    return (
      <Paper style={{ width: '100%' }}>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          fullWidth
          indicatorColor="secondary"
          textColor="secondary"
        >
          <Tab icon={<PeopleIcon />} label="ユーザー情報" />
          <Tab icon={<SendIcon />} label="送る" />
          <Tab icon={<GiftIcon />} label="ポイント交換" />
        </Tabs>
      </Paper>
    );
  }
}
