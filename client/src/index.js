import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import App from './App';
// import Header from './Header.js';
import UserProfile from './UserProfile.js';
import Album from './Album.js';
import Logout from './Logout.js';
import Login from './Login.js';
import Register from './Register.js';
import UserPhotoBin from './UserPhotoBin.js';
import FillerPhotoBin from './FillerPhotoBin.js';


import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={FillerPhotoBin} />
      <Route path="login" component={Login} />
      <Route path="logout" component={Logout} />
      <Route path="register" component={Register} />
      <Route path="user-profile" component={UserProfile}>
        <IndexRoute component={UserPhotoBin} />
        <Route path="album" component={Album} />
      </Route>
          // <Route path="/albums/:album" component={Album} />
    </Route>
  </Router>
  ), document.getElementById('root')
);

// ReactDOM.render((
//   <Router history={hashHistory}>
//     <Route path="/" component={App}>
//       <Route path="/login" component={Login} />
//       <Route path="/logout" component={Logout} />
//       <Route path="/register" component={Register} />
//         <Route component={Search} />
//       </Route>
//       <Route path="/user-profile" component={UserProfile}>
//         <IndexRoute component={FillerPhotoBin} />
//         <Route path="/user-info" component={UserInfo}/>
//         <Route path="/gallery" component={Gallery}>
//           <Route path="/album" component={Album}/>
//           <Route path="/photo" component={Photo}/>
//         </Route>
//       </Route>
//     </Route>
//   </Router>
//   ), document.getElementById('root')
// );
