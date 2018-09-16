import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const Container = styled.div`
  width: 60%;
  max-width: 400px;
  display: flex;
  justify-content: center;
`;

const PointSlider = ({ point, changePoint }) => (
  <Container>
    <Slider
      step={1}
      value={point}
      min={0}
      max={5}
      handleStyle={{
        width: 32,
        height: 32,
        marginLeft: -14,
        marginTop: -9,
      }}
      trackStyle={{ height: 10 }}
      railStyle={{ height: 10 }}
      // style={sliderStyle}
      onChange={value => changePoint(value)}
    />
  </Container>
);

PointSlider.propTypes = {
  point: PropTypes.number.isRequired,
  changePoint: PropTypes.func.isRequired,
};

export default PointSlider;
