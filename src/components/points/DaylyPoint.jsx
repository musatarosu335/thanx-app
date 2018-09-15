import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const Container = styled.div`
  margin: 0 8px;
`;

const Point = styled.div`
  width: 40px;
  margin: 16px auto 0;
  background: linear-gradient(transparent 70%, #a7d6ff 70%);
  font-size: 1rem;
`;

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    textAlign: 'center',
  },
});

const DaylyPoint = ({ daylyPoint, classes }) => (
  <Container>
    <Paper className={classes.root} elevation={1}>
      <Typography component="p">
        {daylyPoint.message}
      </Typography>
      <Point>
        {`${daylyPoint.point}pt`}
      </Point>
    </Paper>
  </Container>
);

DaylyPoint.propTypes = {
  daylyPoint: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DaylyPoint);
