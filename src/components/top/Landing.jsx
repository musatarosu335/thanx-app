import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    width: 240,
    height: 48,
  },
});

const Container = styled.div`

`;

const TitleArea = styled.div`
  background: #22c1c3; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #22c1c3, #fdbb2d); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #22c1c3, #fdbb2d); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 42px 0;
`;

const SubTitle = styled.div`
  margin: 8px 0;
  font-weight: bold;
  font-size: 0.8rem;
  color: #EEE;
`;

const Logo = styled.img`
  width: 80%;
  max-width: 400px;
`;

const CharacteristicArea = styled.div`
  background-color: #FFF;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const HowToUseArea = styled.div`
  background-color: #FAFAFA;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StartArea = styled.div`
  background-color: #FFF;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Landing = ({ classes }) => (
  <Container>
    <TitleArea>
      <Logo alt="" src="/assets/logo/logo.png" />
      <SubTitle>〜日々の感謝を送り合おう〜</SubTitle>
      <Link to="/mypage" style={{ textDecoration: 'none' }}>
        <Button variant="contained" color="secondary" className={classes.button}>
          さっそく始める
        </Button>
      </Link>
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

Landing.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Landing);
