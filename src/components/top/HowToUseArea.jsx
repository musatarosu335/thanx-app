import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #FFF;
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
`;

const HowToUseArea = () => (
  <Container>
    <Title>thanxの使い方</Title>
    <SubTitle>1. パートナーを見つけよう</SubTitle>
    <Description>
      ログインするとパートナー検索ができるようになります。
      パートナーとペアが成立するとマイページへ移動できます。
    </Description>
    <Image src="/assets/icon/couple.svg" />
    <SubTitle>2. ポイントを送り合おう</SubTitle>
    <Description>
      料理や洗濯など、日々の感謝をポイントとしてパートナーに送りましょう。
      一緒にメッセージも添えてあげると感謝の気持ちがより伝わります。
    </Description>
    <Image
      src="/assets/icon/send_screen.png"
      style={{
        border: '1px solid rgba(180, 180, 180, 0.48)',
        borderRadius: 7,
      }}
    />
    <SubTitle>3. チケットと交換しよう</SubTitle>
    <Description>
      日々のポイントは貯めることができます。
      貯めたポイントはチケットと交換できます。
    </Description>
    <Image src="/assets/icon/ticket.svg" />
    <SubTitle>4. チケットを実行しよう</SubTitle>
    <Description>
        交換したチケットをパートナーに実行してもらいましょう。
      （チケットは随時追加予定です）
    </Description>
    <Image src="/assets/icon/ticket.svg" />
    <SubTitle>5. ポイントを確認しよう</SubTitle>
    <Description>日々のポイント獲得状況はマイページから確認できます。</Description>
    <Image src="/assets/icon/graph.svg" />
  </Container>
);

export default HowToUseArea;
