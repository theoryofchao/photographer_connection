import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import App from './App';
import Header from './Header.js';
import UserProfile from './UserProfile.js';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';


ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/header" component={Header}/>
      <Route path="/user-profile" component={UserProfile}/>
    </Route>
  </Router>
  ), document.getElementById('root')
);
