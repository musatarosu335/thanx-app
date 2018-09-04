import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
`;

const Title = styled.h2`
  color: #333;
`;

const Description = styled.p`
  color: #666;
  font-size: 0.9rem;
`;

const CharacteristicArea = () => (
  <Container>
    <Title>thanxとは</Title>
    <Description>
      thanxとは日々の感謝をパートナーと送り合うアプリです。
      感謝はポイントとして貯めて、チケットと交換することができます。
      発行されたチケットをお互いが実行し合うことで、
      今以上にパートナーとの絆が深まります。
    </Description>
  </Container>
);

export default CharacteristicArea;
