import React from 'react';
import PropTypes from 'prop-types';
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

const PartnerPanel = ({ classes }) => (
  <Paper className={classes.root} elevation={1}>
    <UserAvatar />
    <Typography component="p">
      Paper can be used to build surface or other elements for your application.
    </Typography>
  </Paper>
);

PartnerPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PartnerPanel);
