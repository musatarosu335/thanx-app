import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Auth from './Auth';
import CheckPair from './CheckPair';
import NoMatch from './NoMatch';
import Header from './common/Header';
import MainPage from './main/MainPage';
// import SignupPage from './signup/SignupPage';
import LoginPage from './login/LoginPage';
import SearchPage from '../containers/search/SearchPage';
import Mypage from './mypage/Mypage';
import SamplePage from './sample/SamplePage';

const App = () => (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={MainPage} />
        {/*
          <Route exact path="/signup" component={SignupPage} />
        */}
        <Route exact path="/login" component={LoginPage} />
        <Route component={NoMatch} />
        <Auth>
          <Switch>
            <Route exact path="/search" component={SearchPage} />
            <CheckPair>
              <Switch>
                <Route exact path="/mypage" component={Mypage} />
                <Route exact path="/sample" component={SamplePage} />
              </Switch>
            </CheckPair>
          </Switch>
        </Auth>
      </Switch>
    </div>
  </Router>
);

export default App;
