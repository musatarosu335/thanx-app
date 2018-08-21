import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import fetchWeeklyPoint from '../../func/fetchWeeklyPoint';
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

    fetchWeeklyPoint().then((receivedPointList) => {
      this.setState({
        daylyPointList: _.filter(receivedPointList, ['formattedSentTime', date]),
      });
    });
  }

  render() {
    if (this.state.daylyPointList.length === 0) {
      return (
        <div>ポイントが無いか、日付けを参照できません。</div>
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
