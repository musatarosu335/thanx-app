import React from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase/app';
import moment from 'moment';
import _ from 'lodash';

export default class DaylyPointList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      daylyPointList: [],
    };
  }

  componentDidMount() {
    const { date } = this.props;
    const db = firebase.firestore();
    const { currentUser } = firebase.auth();
    const receivedPointRef = db.collection(`users/${currentUser.uid}/point`);
    const today = new Date();
    today.setDate(today.getDate() - 1); // 要調整
    const lastWeek = new Date();
    lastWeek.setDate(lastWeek.getDate() - 8); // 要調整
    const receivedPointList = [];

    receivedPointRef.where('sent_time', '>=', lastWeek).where('sent_time', '<', today) // 要調整
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const sentTime = doc.data().sent_time.seconds;
          const formattedSentTime = moment.unix(sentTime).format('MM-DD');
          const modData = {
            ...doc.data(),
            formattedSentTime,
          };
          receivedPointList.push(modData);
        });
        this.setState({
          daylyPointList: _.filter(receivedPointList, ['formattedSentTime', date]),
        });
      })
      .catch((err) => {
        console.log(err); // eslint-disable-line no-console
      });
  }

  render() {
    if (this.state.daylyPointList.length === 0) {
      return (
        <div>Now Loading...</div>
      );
    }
    return (
      <div>
        {this.state.daylyPointList.map((daylyPoint) => {
          return <p>test</p>;
        })}
      </div>
    );
  }
}

DaylyPointList.propTypes = {
  date: PropTypes.string.isRequired,
};
