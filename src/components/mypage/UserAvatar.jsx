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
    margin: '0 6px',
  },
  bigAvatar: {
    width: 50,
    height: 50,
  },
};

const UserAvatar = ({ photoURL, classes }) => (
  <div className={classes.row}>
    <Avatar
      alt="Adelle Charles"
      src={photoURL || '/assets/icon/default_profile.svg'}
      className={classNames(classes.bigAvatar)}
    />
  </div>
);

UserAvatar.propTypes = {
  photoURL: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserAvatar);
