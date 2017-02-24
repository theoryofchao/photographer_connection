import React, { Component } from 'react';
import './App.css';
import Header from './Header.js'
// import { Link } from 'react-router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <br />
        {this.props.children}
      </div>
    );
  }
}

export default App;
