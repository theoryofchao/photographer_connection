import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import App from './App';
import UserProfile from './UserProfile.js';
import Album from './Album.js';
import Login from './Login.js';
import Register from './Register.js';
import MyProfile from './MyProfile.js';
import UserPhotoBin from './UserPhotoBin.js';
import FillerPhotoBin from './FillerPhotoBin.js';
import './index.css';


ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={FillerPhotoBin} />
      <Route path="login" component={Login} />
      <Route path="register" component={Register} />
      <Route path="my-profile" component={MyProfile} />
      <Route path="user-profile/:id" component={UserProfile}>
        <IndexRoute component={UserPhotoBin} />
        <Route path="album/:id" component={Album} />
      </Route>
          // <Route path="/albums/:album" component={Album} />
    </Route>
  </Router>
  ), document.getElementById('root')
);
