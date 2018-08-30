import React from 'react';
import PropTypes from 'prop-types';
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
    const { setAuth } = this.props;

    firebase.auth().signOut()
      .then(() => {
        console.log('Logout'); // eslint-disable-line no-console
        this.setState({
          redirect: true,
        });
        // Header操作のため
        setAuth(false);
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

LogoutButton.propTypes = {
  setAuth: PropTypes.func.isRequired,
};
