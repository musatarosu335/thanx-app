import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Auth from './Auth';
import CheckPartner from './CheckPartner';
import NoMatch from './NoMatch';
import Header from './common/Header';
import MainPage from './main/MainPage';
// import SignupPage from './signup/SignupPage';
import LoginPage from './login/LoginPage';
import SearchPage from '../containers/search/SearchPage';
import MyPage from '../containers/mypage/MyPage';
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
        <Auth>
          <Switch>
            <Route exact path="/search" component={SearchPage} />
            <CheckPartner>
              <Switch>
                <Route exact path="/mypage" component={MyPage} />
                <Route exact path="/sample" component={SamplePage} />
                <Route component={NoMatch} />
              </Switch>
            </CheckPartner>
          </Switch>
        </Auth>
      </Switch>
    </div>
  </Router>
);

export default App;
