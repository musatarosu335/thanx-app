import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';

const styles = {
  list: {
    width: 250,
  },
};

const Sidebar = ({ isOpenSidebar, toggleSidebar, classes }) => (
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
        <List component="nav">
          <Link to="/settings">
            <ListItem button>
              <ListItemText primary="ユーザー設定" />
            </ListItem>
          </Link>
          <Divider />
          <ListItem button>
            <ListItemText primary="ログアウト" />
          </ListItem>
        </List>
      </div>
    </Drawer>
  </div>
);

Sidebar.propTypes = {
  isOpenSidebar: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Sidebar);
