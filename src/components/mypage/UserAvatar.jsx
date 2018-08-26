import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const styles = {
  row: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#ddd',
    borderRadius: '50%',
    margin: '0 4px',
  },
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    width: 30,
    height: 30,
  },
};

const UserAvatar = ({ classes }) => {
  return (
    <div className={classes.row}>
      <Avatar
        alt="Adelle Charles"
        src="/assets/icon/default_profile.svg"
        className={classNames(classes.avatar, classes.bigAvatar)}
      />
    </div>
  );
};

UserAvatar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserAvatar);
