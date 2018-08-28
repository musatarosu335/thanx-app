import React from 'react';
import firebase from 'firebase/app';
import { Redirect } from 'react-router-dom';
import ListItemText from '@material-ui/core/ListItemText';

export default class LogoutButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    };
  }

  handleClick() {
    firebase.auth().signOut()
      .then(() => {
        console.log('Logout'); // eslint-disable-line no-console
        this.setState({
          redirect: true,
        });
      })
      .catch((error) => {
        console.log(error.code); // eslint-disable-line no-console
        console.log(error.message); // eslint-disable-line no-console
      });
  }

  render() {
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to="/" />;
    }

    return (
      <ListItemText primary="ログアウト" onClick={() => this.handleClick()} />
    );
  }
}
