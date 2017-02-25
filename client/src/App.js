import React, { Component } from 'react';
import Header from './Header.js'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <br />
        {this.props.children}
      </div>
    );
  }
}

export default App;
