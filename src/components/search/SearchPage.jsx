import firebase from 'firebase/app';
import React from 'react';
import styled from 'styled-components';

import FollowerNotification from './FollowerNotification';
import SearchForm from '../../containers/search/SearchForm';
import SearchResult from '../../containers/search/SearchResults';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
`;

export default class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      followingUser: null,
    };
  }

  componentWillMount() {
    const db = firebase.firestore();
    const { currentUser } = firebase.auth();
    const followingUserRef = db.collection(`users/${currentUser.uid}/following`);

    followingUserRef.get().then((snapshot) => {
      snapshot.forEach((doc) => {
        if (doc.exists) {
          this.setState({
            followingUser: doc.id,
          });
        } else {
          console.log('No such document!'); // eslint-disable-line
        }
      });
    });
  }

  render() {
    return (
      // pairがいる場合はMyPageへリダイレクトさせる必要あり
      <Container>
        <h1>Search Page</h1>
        <p>説明をここに記述</p>
        <FollowerNotification />
        <SearchForm />
        {this.state.followingUser ? <div>following</div> : <SearchResult />}
      </Container>
    );
  }
}
