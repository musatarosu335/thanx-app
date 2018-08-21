import React from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase/app';

import Alert from '../common/Alert';
import DaylyPoint from './DaylyPoint';

export default class DaylyPointList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      daylyPointList: [], // Reduxのstateとして管理する必要なし
    };
  }

  componentDidMount() {
    const { date } = this.props;
    const db = firebase.firestore();
    const { currentUser } = firebase.auth();
    const receivedPointRef = db.collection(`users/${currentUser.uid}/point`);
    const targetDate = new Date(`${date} 00:00:00`); // urlパラメータから検索日を作成
    const endOfTargetDate = new Date(`${date} 23:59:59`); // urlパラメータから検索日を作成(1日の終わり)
    const daylyPointList = [];

    receivedPointRef.where('sent_time', '>=', targetDate).where('sent_time', '<=', endOfTargetDate)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          daylyPointList.push(doc.data());
        });
        this.setState({
          daylyPointList,
        });
      })
      .catch((err) => {
        console.log(err); // eslint-disable-line no-console
      });
  }

  render() {
    if (this.state.daylyPointList.length === 0) {
      return (
        <Alert>ポイントが無いか、日付けを参照できません。</Alert>
      );
    }
    return (
      <div>
        {this.state.daylyPointList.map((daylyPoint, i) => (
          <DaylyPoint key={i} daylyPoint={daylyPoint} /> // eslint-disable-line
        ))}
      </div>
    );
  }
}

DaylyPointList.propTypes = {
  date: PropTypes.string.isRequired,
};
