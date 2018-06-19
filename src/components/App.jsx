import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Auth from './Auth';
import CheckPair from './CheckPair';
// import SignupPage from './signup/SignupPage';
import LoginPage from './login/LoginPage';
import SerchPage from './serch/SerchPage';
import Mypage from './mypage/Mypage';
import SamplePage from './sample/SamplePage';

const App = () => (
  <Router>
    <Switch>
      {/*
        <Route exact path="/signup" component={SignupPage} />
      */}
      <Route exact path="/login" component={LoginPage} />
      <Auth>
        <Switch>
          <Route exact path="/serch" component={SerchPage} />
          <CheckPair>
            <Switch>
              <Route exact path="/mypage" component={Mypage} />
              <Route exact path="/sample" component={SamplePage} />
            </Switch>
          </CheckPair>
        </Switch>
      </Auth>
    </Switch>
  </Router>
);

export default App;
