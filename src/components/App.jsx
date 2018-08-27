import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Auth from './Auth';
import CheckPartner from '../containers/checkPartner';
import NoMatch from './NoMatch';
import Header from '../containers/common/Header';
import MainPage from './main/MainPage';
import LoginPage from './login/LoginPage';
import SearchPage from '../containers/search/SearchPage';
import MyPage from '../containers/mypage/MyPage';
import PointsPage from './points/PointsPage';
import SettingsPage from '../containers/settings/SettingsPage';

import CreateTestUser from './_testUser/SignupPage';

const App = () => (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/create-test-user" component={CreateTestUser} />
        <Auth>
          <Switch>
            <Route exact path="/search" component={SearchPage} />
            <Route exact path="/settings" component={SettingsPage} />
            <CheckPartner>
              <Switch>
                <Route exact path="/mypage" component={MyPage} />
                <Route exact path="/points/:date" component={PointsPage} />
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
