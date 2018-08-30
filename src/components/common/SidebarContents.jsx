import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
// import Divider from '@material-ui/core/Divider';

const styles = {
  list: {
    width: 200,
  },
};

const SidebarAuthContents = () => (
  <List component="nav">
    <Link to="/landing" style={{ textDecorationLine: 'none' }}>
      <ListItem button>
        <ListItemText primary="thanxとは" />
      </ListItem>
    </Link>
  </List>
);

export default withStyles(styles)(SidebarAuthContents);
