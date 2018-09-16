import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PeopleIcon from '@material-ui/icons/People';
import SendIcon from '@material-ui/icons/Send';
import GiftIcon from '@material-ui/icons/CardGiftcard';

import UserInfoTab from '../../containers/mypage/UserInfoTab';
import SendTab from './SendTab';
import ExchangeTab from './ExchangeTab';

const styles = {
  paper: {
    width: '100vw',
    borderRadius: 0,
  },
  tabs: {
    maxWidth: 960,
    margin: '0 auto',
  },
  tabContainer: {
    maxWidth: 960,
    margin: '0 auto',
  },
};

class MyPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const {
      fetchAndSetUserInfo,
      fetchAndSetPartnerInfo,
      fetchTicketList,
      fetchReceivedTickets,
      fetchSentTickets,
      fetchDaylyTotalPoints,
    } = this.props;

    fetchAndSetUserInfo();
    fetchAndSetPartnerInfo();
    fetchTicketList();
    fetchReceivedTickets();
    fetchSentTickets();
    fetchDaylyTotalPoints();
  }

  handleChange(event, value) {
    this.setState({ value });
  }

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div>
        <Paper className={classes.paper}>
          <Tabs
            value={value}
            onChange={this.handleChange}
            fullWidth
            indicatorColor="secondary"
            textColor="secondary"
            className={classes.tabs}
          >
            <Tab icon={<PeopleIcon />} label="ユーザー情報" />
            <Tab icon={<SendIcon />} label="ポイントを送る" />
            <Tab icon={<GiftIcon />} label="チケット交換" />
          </Tabs>
        </Paper>
        <div className={classes.tabContainer}>
          {value === 0 && <UserInfoTab />}
          {value === 1 && <SendTab />}
          {value === 2 && <ExchangeTab />}
        </div>
      </div>
    );
  }
}

MyPage.propTypes = {
  fetchAndSetUserInfo: PropTypes.func.isRequired,
  fetchAndSetPartnerInfo: PropTypes.func.isRequired,
  fetchTicketList: PropTypes.func.isRequired,
  fetchReceivedTickets: PropTypes.func.isRequired,
  fetchSentTickets: PropTypes.func.isRequired,
  fetchDaylyTotalPoints: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MyPage);
