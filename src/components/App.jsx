import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Auth from '../containers/Auth';
import CheckPartner from '../containers/checkPartner';
import NoMatch from './NoMatch';
import Header from '../containers/common/Header';
import TopPage from './top/TopPage';
import LoginPage from './login/LoginPage';
import Landing from './top/Landing';
import TermsPage from './terms/TermsPage';
import PolicyPage from './terms/PolicyPage';
import SearchPage from '../containers/search/SearchPage';
import MyPage from '../containers/mypage/MyPage';
import PointsPage from './points/PointsPage';
import SettingsPage from '../containers/settings/SettingsPage';

// import CreateTestUser from './_testUser/SignupPage';

const App = () => (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={TopPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/landing" component={Landing} />
        <Route exact path="/terms" component={TermsPage} />
        <Route exact path="/policy" component={PolicyPage} />
        {/*
          <Route exact path="/create-test-user" component={CreateTestUser} />
        */}
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
