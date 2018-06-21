import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import NormalButton from '../common/NormalButton';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
    textAlign: 'center',
  }),
});

const FollowerNotification = (props) => {
  const { classes } = props;
  return (
    <div>
      <Paper className={classes.root} elevation={4}>
        <Typography variant="headline">
          HOGEさんからリクエストがきています
        </Typography>
        <NormalButton>承認</NormalButton>
      </Paper>
    </div>
  );
};

FollowerNotification.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FollowerNotification);
