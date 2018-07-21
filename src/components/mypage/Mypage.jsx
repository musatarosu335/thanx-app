import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PeopleIcon from '@material-ui/icons/People';
import SendIcon from '@material-ui/icons/Send';
import GiftIcon from '@material-ui/icons/CardGiftcard';

import UserInfoTab from '../../containers/mypage/UserInfoTab';
import SendTab from './SendTab';
import ExchangeTab from './ExchangeTab';

export default class MyPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.fetchAndSetUserInfo();
    this.props.fetchAndSetPartnerInfo();
    this.props.fetchTicketList();
  }

  handleChange(event, value) {
    this.setState({ value });
  }

  render() {
    const { value } = this.state;

    return (
      <div>
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
        {value === 0 && <UserInfoTab />}
        {value === 1 && <SendTab />}
        {value === 2 && <ExchangeTab />}
      </div>
    );
  }
}

MyPage.propTypes = {
  fetchAndSetUserInfo: PropTypes.func.isRequired,
  fetchAndSetPartnerInfo: PropTypes.func.isRequired,
  fetchTicketList: PropTypes.func.isRequired,
};
