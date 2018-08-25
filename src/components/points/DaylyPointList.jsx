import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import firebase from 'firebase/app';
import Grid from '@material-ui/core/Grid';

import Alert from '../common/Alert';
import DaylyPoint from './DaylyPoint';

const Container = styled.div`
  width: 100%;
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
      <Container>
        <Grid container spacing={8}>
          {this.state.daylyPointList.map((daylyPoint, i) => (
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
