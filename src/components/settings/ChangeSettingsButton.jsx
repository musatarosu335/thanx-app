import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
});

const ChangeSettingsButton = ({ classes }) => (
  <Button variant="contained" color="secondary" className={classes.button}>
    変更を保存
  </Button>
);

ChangeSettingsButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ChangeSettingsButton);
