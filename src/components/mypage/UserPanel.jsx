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
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    margin: 5,
    textAlign: 'center',
    flex: 1,
  },
});

const PanelHeader = styled.div`
  display: flex;
  align-items: center;
`;

const UserPanel = ({ basicUserInfo, classes }) => {
  const userName = basicUserInfo.user_name;
  const { point } = basicUserInfo;

  return (
    <Paper className={classes.root} elevation={1}>
      <PanelHeader>
        <UserAvatar />
        <div>{userName}</div>
      </PanelHeader>
      <Typography component="p">
        {point}pt
      </Typography>
    </Paper>
  );
};

UserPanel.propTypes = {
  basicUserInfo: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserPanel);