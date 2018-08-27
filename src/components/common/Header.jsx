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
  },
  menuButton: {
    // hoge
  },
};

const Header = ({ isOpenSidebar, toggleSidebar, classes }) => (
  <div className={classes.root}>
    <AppBar position="static">
      <Toolbar>
        <div className={classes.flex}>
          <img src="/assets/logo/logo.png" alt="" style={{ height: 40 }} />
        </div>
        <IconButton
          className={classes.menuButton}
          color="inherit"
          aria-label="Menu"
          onClick={() => toggleSidebar(true)}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
    <Sidebar isOpenSidebar={isOpenSidebar} toggleSidebar={toggleSidebar} />
  </div>
);

Header.propTypes = {
  isOpenSidebar: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
