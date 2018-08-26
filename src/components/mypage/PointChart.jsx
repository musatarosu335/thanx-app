import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { lifecycle } from 'recompose';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

import CustomizedDot from './CustomizedDot';

const Container = styled.div`
  position: relative;
  width: 100%;
  padding: 8px 0;
  border: 1px solid rgba(180, 180, 180, 0.48);

  &::after {
    position: absolute;
    font-family: "Font Awesome 5 Free",'Quicksand','Avenir','Arial',sans-serif;
    content: 'ポイント情報';
    background: #2196F3;
    color: #fff;
    left: 4px;
    bottom: 100%;
    border-radius: 5px 5px 0 0;
    padding: 6px 16px 6px;
    font-size: 0.9rem;
    line-height: 1;
    letter-spacing: 0.05rem;
  }
`;

const PointChart = ({ daylyTotalPoints }) => (
  <Container>
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={daylyTotalPoints}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="totalPoint"
          stroke="#8884d8"
          isAnimationActive={false}
          activeDot={false}
          dot={<CustomizedDot />}
        />
      </LineChart>
    </ResponsiveContainer>
  </Container>
);

PointChart.propTypes = {
  daylyTotalPoints: PropTypes.array.isRequired,
};

export default lifecycle({
  componentDidMount() {
    // 一週間分のポイント情報を取得 + 日付けごとのポイントを合計
    this.props.fetchDaylyTotalPoints();
  },
})(PointChart);
