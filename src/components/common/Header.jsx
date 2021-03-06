import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Sidebar from './Sidebar';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
  },
};

const Header = ({
  isAuth,
  isOpenSidebar,
  toggleSidebar,
  classes,
}) => (
  <div className={classes.root}>
    <AppBar position="static">
      <Toolbar>
        <div className={classes.flex}>
          <img src="/assets/logo/logo.png" alt="" style={{ height: 56 }} />
        </div>
        <IconButton
          color="inherit"
          aria-label="Menu"
          onClick={() => toggleSidebar(true)}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
    <Sidebar isAuth={isAuth} isOpenSidebar={isOpenSidebar} toggleSidebar={toggleSidebar} />
  </div>
);

Header.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  isOpenSidebar: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
