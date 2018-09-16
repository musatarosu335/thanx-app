import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

import LogoutButton from '../../containers/common/LogoutButton';

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const styles = {
  list: {
    width: 200,
  },
};

const SidebarAuthContents = () => (
  <List component="nav">
    <StyledLink to="/mypage">
      <ListItem button>
        <ListItemText primary="マイページ" />
      </ListItem>
    </StyledLink>
    <Divider />
    <StyledLink to="/settings">
      <ListItem button>
        <ListItemText primary="ユーザー設定" />
      </ListItem>
    </StyledLink>
    <Divider />
    <ListItem button>
      <LogoutButton />
    </ListItem>
    <Divider />
    <StyledLink to="/landing">
      <ListItem button>
        <ListItemText primary="thanxとは" />
      </ListItem>
    </StyledLink>
    <Divider />
    <StyledLink to="/terms">
      <ListItem button>
        <ListItemText primary="利用規約" />
      </ListItem>
    </StyledLink>
    <Divider />
    <StyledLink to="/policy">
      <ListItem button>
        <ListItemText primary="プライバシーポリシー" />
      </ListItem>
    </StyledLink>
  </List>
);

export default withStyles(styles)(SidebarAuthContents);
