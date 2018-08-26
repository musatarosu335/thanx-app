import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
});

const ChangeSettingsButton = ({ userName, updateUserInfo, classes }) => (
  <Button
    variant="contained"
    color="secondary"
    className={classes.button}
    onClick={() => updateUserInfo(userName)}
  >
    変更内容を保存
  </Button>
);

ChangeSettingsButton.propTypes = {
  userName: PropTypes.string.isRequired,
  updateUserInfo: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ChangeSettingsButton);
