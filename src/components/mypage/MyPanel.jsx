import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import UserAvatar from './UserAvatar';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    margin: 5,
    textAlign: 'center',
  },
});

const PanelHeader = styled.div`
  display: flex;
  align-items: center;
`;

const MyPanel = ({ classes }) => (
  <Paper className={classes.root} elevation={1}>
    <PanelHeader>
      <UserAvatar />
      <div>name</div>
    </PanelHeader>
    <Typography component="p">
      24pt
    </Typography>
  </Paper>
);

MyPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MyPanel);
