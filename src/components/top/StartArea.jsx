import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 36px;
`;

const Title = styled.h2`
  color: #333;
`;

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    width: 240,
    height: 48,
  },
});

const StartArea = ({ classes }) => (
  <Container>
    <Title>さっそく、感謝を送り合いましょう。</Title>
    <Link to="/mypage" style={{ textDecoration: 'none' }}>
      <Button variant="contained" color="secondary" className={classes.button}>
        さっそく始める
      </Button>
    </Link>
  </Container>
);

StartArea.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StartArea);
