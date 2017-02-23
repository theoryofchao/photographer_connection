import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './Test.js';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router';


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
        <ul>
          <li><Link to="/header">Header</Link></li>
          <li><Link to="/user-profile">User Profile</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

export default App;
