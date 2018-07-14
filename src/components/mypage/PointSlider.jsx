import React from 'react';
import styled from 'styled-components';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const PointSlider = () => (
  <Slider
    step={1}
    value={0}
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
    // onChange={value => this.props.selectInseam(value)}
  />
);

export default PointSlider;
