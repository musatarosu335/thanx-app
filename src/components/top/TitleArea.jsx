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
  background: #00C9FF;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #92FE9D, #00C9FF);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #92FE9D, #00C9FF); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 42px 0;
`;

const SubTitle = styled.div`
  margin: 4px 0 24px;
  font-weight: bold;
  font-size: 0.8rem;
  color: #EEE;
`;

const Logo = styled.img`
  width: 80%;
  max-width: 400px;
`;

const TitleArea = ({ classes }) => (
  <Container>
    <Logo alt="" src="/assets/logo/logo.png" />
    <SubTitle>〜日々の感謝を送り合おう〜</SubTitle>
    <Link to="/mypage" style={{ textDecoration: 'none' }}>
      <Button variant="contained" color="secondary" className={classes.button}>
        さっそく始める
      </Button>
    </Link>
  </Container>
);

TitleArea.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TitleArea);
