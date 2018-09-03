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

const SubTitle = styled.div`
  color: #333;
  border-bottom: solid 3px skyblue;
  position: relative;

  &::after {
    position: absolute;
    content: " ";
    display: block;
    border-bottom: solid 3px #ffc778;
    bottom: -3px;
    width: 30%;
  }
`;

const Description = styled.p`
  color: #666;
  font-size: 0.9rem;
`;

const Image = styled.img`
  width: 40%;
  max-width: 200px;
  margin-top: -24px;
`;

const CharacteristicArea = () => (
  <Container>
    <Title>thanxの特徴</Title>
    <SubTitle>日々の感謝の気持ちをポイントで</SubTitle>
    <Description>メッセージと一緒に日々の感謝の気持ちを送れます。</Description>
    <Image alt="" src="/assets/icon/send.png" />
    <SubTitle>チケット交換</SubTitle>
    <Description>貯めたポイントをチケットと交換できます。</Description>
    <Image alt="" src="/assets/icon/ticket.svg" />
  </Container>
);

export default CharacteristicArea;
