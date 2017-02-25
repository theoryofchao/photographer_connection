import React, { Component, Children, cloneElement } from 'react';
import Header from './Header.js'
import 'whatwg-fetch'

const initialState = {
  currentUser: {},
  registration: {email: '', password: '', passwordConfirmation: ''},
  login: {email: '', password: ''}
}

class App extends Component {
  constructor(props) {
    super(props);
   this.state = initialState;
  }

onRegistrationSubmit = (regInfo) => {
  console.log(regInfo);
  fetch('http://localhost:8080/users/register', {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: regInfo.email,
      password: regInfo.password,
      password_confirmation: regInfo.passwordConfirmation
    })
  })
  .then((response) => {
    console.log(response);
  })
}
  render() {
    return (
      <div>
        <Header />
        <br />
        {Children.map(this.props.children, child =>
          cloneElement(child, {
            ...this.props,
            ...this.state,
            onRegistrationSubmit: this.onRegistrationSubmit,
          })
        )}
      </div>
    );
  }
}

export default App;
