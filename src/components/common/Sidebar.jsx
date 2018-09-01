import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';

import SidebarContents from './SidebarContents';
import SidebarAuthContents from './SidebarAuthContents';

const styles = {
  list: {
    width: 220,
  },
};

const Sidebar = ({
  isAuth,
  isOpenSidebar,
  toggleSidebar,
  classes,
}) => (
  <div>
    <Drawer
      anchor="right"
      open={isOpenSidebar}
      onClose={() => toggleSidebar(false)}
    >
      <div
        className={classes.list}
        tabIndex={0}
        role="button"
        onClick={() => toggleSidebar(false)}
        onKeyDown={() => toggleSidebar(false)}
      >
        {isAuth ? <SidebarAuthContents /> : <SidebarContents />}
      </div>
    </Drawer>
  </div>
);

Sidebar.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  isOpenSidebar: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Sidebar);
