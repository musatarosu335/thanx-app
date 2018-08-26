import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

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
  justify-content: center;
  align-items: center;
`;

const Point = styled.div`
  width: 40px;
  margin: 8px auto 0;
  background: linear-gradient(transparent 70%, #a7d6ff 70%);
  font-size: 1rem;
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
      <Point>
        {`${point}pt`}
      </Point>
    </Paper>
  );
};

UserPanel.propTypes = {
  basicUserInfo: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserPanel);
