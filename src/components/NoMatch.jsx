import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Heading = styled.div`
  width: 100%;
  border-bottom: 3px solid rgba(180, 180, 180, 0.48);
  padding: 20px;
  text-align: center;
  font-size: 36px;
  font-weight: bold;
  color: #FE0000;
`;

const NoMatch = () => (
  <Container>
    <Heading>404 Page Not Found</Heading>
    <h2>このURLに該当するページは存在しません。</h2>
    <p>お探しのページは移動もしくは削除された可能性があります。</p>
    <Link to="/">Topページ</Link>
  </Container>
);

export default NoMatch;
