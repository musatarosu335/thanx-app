import React from 'react';
import styled from 'styled-components';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const Container = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
`;

const PointSlider = () => (
  <Container>
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
  </Container>
);

export default PointSlider;
