import React from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase/app';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import UserAvatar from '../mypage/UserAvatar';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginBottom: theme.spacing.unit * 2,
    width: '70%',
  }),
  userInfo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  userName: {
    fontSize: '1.2rem',
  },
});

class CurrenUserPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUserInfo: {}, // Reduxのstateとして管理する必要なし
    };
  }

  componentDidMount() {
    const db = firebase.firestore();
    const { currentUser } = firebase.auth();
    const currentUserRef = db.collection('users').doc(currentUser.uid);

    currentUserRef.get().then((doc) => {
      this.setState({
        currentUserInfo: doc.data(),
      });
    });
  }

  render() {
    const { currentUserInfo } = this.state;
    const { classes } = this.props;

    return (
      <Paper className={classes.root} elevation={4}>
        <Typography component="div" className={classes.userInfo}>
          <UserAvatar photoURL={currentUserInfo.photo_url} />
          <div className={classes.userName}>{currentUserInfo.user_name}</div>
        </Typography>
      </Paper>
    );
  }
}

CurrenUserPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CurrenUserPanel);
