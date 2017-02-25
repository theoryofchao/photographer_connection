import React, { Component } from 'react';
import Header from './Header.js'
import 'whatwg-fetch'

const initialState = {
  currentUser: {},
  registration: {email: '', password: '', passwordConfirmation: ''},
  login: {}
}

class App extends Component {
  constructor(props) {
    super(props);
   this.state = initialState;
  }

getChildContext () {
  return {
    onRegistrationSubmit: this.onRegistrationSubmit
  }
}

onRegistrationSubmit = (content) => {
  alert("Test!");
}
  render() {
    return (
      <div>
        <Header/>
        <br />
        {this.props.children}
      </div>
    );
  }
}

App.childContextTypes = {
  onRegistrationSubmit: React.PropTypes.func
};
export default App;
