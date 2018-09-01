import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`

`;

const TitleArea = styled.div`
  background-color: #00ad9a;
`;

const CharacteristicArea = styled.div`
  background-color: #FFF;
`;

const HowToUseArea = styled.div`
  background-color: #FAFAFA;
`;

const StartArea = styled.div`
  background-color: #FFF;
`;

const Landing = () => (
  <Container>
    <TitleArea>
      <Link to="/mypage">マイページ</Link>
    </TitleArea>
    <CharacteristicArea>
      特徴
    </CharacteristicArea>
    <HowToUseArea>
      使い方
    </HowToUseArea>
    <StartArea>
      始めよう
    </StartArea>
  </Container>
);

export default Landing;
