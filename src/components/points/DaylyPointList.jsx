import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import firebase from 'firebase/app';
import Grid from '@material-ui/core/Grid';

import Alert from '../common/Alert';
import DaylyPoint from './DaylyPoint';

const Container = styled.div`
  width: 100%;
  margin-top: 16px;
`;

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
    const startOfTargetDate = new Date(date); // urlパラメータから検索日を作成
    startOfTargetDate.setHours(startOfTargetDate.getHours() - 9); // マイナス９時間して00:00に合わせる
    const endOfTargetDate = new Date(date);
    endOfTargetDate.setDate(endOfTargetDate.getDate() + 1);
    endOfTargetDate.setHours(endOfTargetDate.getHours() - 9);
    const daylyPointList = [];

    receivedPointRef.where('sent_time', '>=', startOfTargetDate).where('sent_time', '<=', endOfTargetDate)
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
    const { daylyPointList } = this.state;

    if (daylyPointList.length === 0) {
      return (
        <Alert>ポイントが無いか、日付けを参照できません。</Alert>
      );
    }

    return (
      <Container>
        <Grid container spacing={8}>
          {daylyPointList.map((daylyPoint, i) => (
            <Grid item xs={12} sm={6} key={i}> {/* eslint-disable-line */}
              <DaylyPoint daylyPoint={daylyPoint} />
            </Grid>
          ))}
        </Grid>
      </Container>
    );
  }
}

DaylyPointList.propTypes = {
  date: PropTypes.string.isRequired,
};
