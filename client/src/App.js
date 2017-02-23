import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './Test.js';
import { Button } from 'react-bootstrap';
import Header from './Header.js';
import UserProfile from './UserProfile.js';


const buttonsInstance = (
  <Button bsSize="large">Click me!</Button>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro blockquote-reverse">
          To get started, edit <code>src/App.js</code> and save to reload.
        <Test />
        {buttonsInstance}
        </p>
        <Header />
        <UserProfile />
      </div>
    );
  }
}

export default App;
