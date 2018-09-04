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

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 36px;
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

const CoupleIcon = styled.img`
  width: 100px;
  max-width: 200px;
`;

const SendIcon = styled.img`
  width: 100px;
  max-width: 200px;
`;

const TicketIcon = styled.img`
  width: 100px;
  max-width: 200px;
`;

const GraphIcon = styled.img`
  width: 120px;
  max-width: 200px;
`;

const HowToUseArea = () => (
  <Container>
    <Title>thanxの使い方</Title>
    <Section>
      <SubTitle>1. パートナーを見つけよう</SubTitle>
      <Description>
        ログインするとパートナー検索ができるようになります。
        パートナーとペアが成立するとマイページへ移動できます。
      </Description>
      <CoupleIcon src="/assets/images/couple.svg" />
    </Section>
    <Section>
      <SubTitle>2. ポイントを送り合おう</SubTitle>
      <Description>
        料理や洗濯など、日々の感謝をポイントとしてパートナーに送りましょう。
        一緒にメッセージも添えてあげると感謝の気持ちがより伝わります。
      </Description>
      <SendIcon src="/assets/images/send.png" />
    </Section>
    <Section>
      <SubTitle>3. チケットと交換しよう</SubTitle>
      <Description>
        日々のポイントは貯めることができます。
        貯めたポイントはチケットと交換できます。
      </Description>
      <TicketIcon src="/assets/images/ticket.svg" />
    </Section>
    <Section>
      <SubTitle>4. チケットを実行しよう</SubTitle>
      <Description>
          交換したチケットをパートナーに実行してもらいましょう。
          お互いのチケット状況はマイページから確認できます。
        （チケットは随時追加予定です）
      </Description>
      <TicketIcon src="/assets/images/do.svg" />
    </Section>
    <Section>
      <SubTitle>5. ポイントを確認しよう</SubTitle>
      <Description>日々のポイント獲得状況はマイページから確認できます。</Description>
      <GraphIcon src="/assets/images/graph.png" />
    </Section>
  </Container>
);

export default HowToUseArea;
