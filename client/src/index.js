import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import App from './App';
import Header from './Header.js';
import Nav from './Nav.js';
import Search from './Search.js';
import UserProfile from './UserProfile.js';
import UserInfo from './UserInfo.js';
import Gallery from './Gallery.js';
import Album from './Album.js';
import Photo from './Photo.js';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';


ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/header" component={Header}>
        <Route path="/nav" component={Nav}/>
        <Route path="/search" component={Search}/>
      </Route>
      <Route path="/user-profile" component={UserProfile}>
        <Route path="/user-info" component={UserInfo}/>
        <Route path="/gallery" component={Gallery}>
          <Route path="/album" component={Album}/>
          <Route path="/photo" component={Photo}/>
        </Route>
      </Route>
    </Route>
  </Router>
  ), document.getElementById('root')
);
