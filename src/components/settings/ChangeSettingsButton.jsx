import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
});

const ChangeSettingsButton = ({
  userName,
  allowChangeSettings,
  updateUserInfo,
  toggleChangeSettings,
  classes,
}) => (
  <Button
    variant="contained"
    color="secondary"
    className={classes.button}
    disabled={!allowChangeSettings} // 変更可：allowChangeSettings→true, 変更不可：allowChangeSettings→false
    onClick={() => {
      updateUserInfo(userName);
      toggleChangeSettings(false);
    }}
  >
    変更内容を保存
  </Button>
);

ChangeSettingsButton.propTypes = {
  userName: PropTypes.string.isRequired,
  allowChangeSettings: PropTypes.bool.isRequired,
  updateUserInfo: PropTypes.func.isRequired,
  toggleChangeSettings: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ChangeSettingsButton);
