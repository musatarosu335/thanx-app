import React from 'react';
import styled from 'styled-components';

import TitleArea from './TitleArea';
import CharacteristicArea from './CharacteristicArea';
import HowToUseArea from './HowToUseArea';
import StartArea from './StartArea';

const Container = styled.div`

`;

const Landing = () => (
  <Container>
    <TitleArea />
    <CharacteristicArea />
    <HowToUseArea />
    <StartArea />
  </Container>
);

export default Landing;
