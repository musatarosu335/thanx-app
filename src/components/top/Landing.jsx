import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  background-color: #ddd;
`;

const Landing = () => (
  <Container>
    <h2>Landing Page</h2>
    <Link to="/mypage">マイページ</Link>
  </Container>
);

export default Landing;
