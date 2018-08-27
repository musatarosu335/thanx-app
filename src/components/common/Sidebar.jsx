import React from 'react';
import PropTypes from 'prop-types';
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

class Sidebar extends React.Component {
  toggleDrawer(side, open) {
    return (
      () => {
        this.setState({
          [side]: open,
        });
      }
    );
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Drawer anchor="right" open={true} onClose={() => this.toggleDrawer('right', false)}>
          <div
            className={classes.list}
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('right', false)}
            onKeyDown={this.toggleDrawer('right', false)}
          >
            <List component="nav">
              <ListItem button>
                <ListItemText primary="ユーザー設定" />
              </ListItem>
              <Divider />
              <ListItem button>
                <ListItemText primary="ログアウト" />
              </ListItem>
            </List>
          </div>
        </Drawer>
      </div>
    );
  }
}

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Sidebar);
