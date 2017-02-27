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
  //console.log(regInfo);
  fetch('http://localhost:8080/users/register', {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      token: localStorage.token,
      email: regInfo.email,
      password: regInfo.password,
      password_confirmation: regInfo.passwordConfirmation
    })
  })
  .then((response) => {
    var contentType = response.headers.get("content-type");
    if(contentType && contentType.indexOf("application/json") !== -1) {
      return response.json().then(function(json) {
        if (response.status !== 200) {
          console.log(json.message); //if error occured 
        }
        else {
          console.log(json.message);
          if (json.token) {
            localStorage.token = json.token;
          }
        }
      });
    } else {
      console.log("Oops, we haven't got JSON!");
    }
  })
  .catch( (error) => {  //network error only
    console.error(error);
  });
}

onLoginSubmit = (loginInfo) => {
  fetch('http://localhost:8080/users/login', {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      token: localStorage.token,
      email: loginInfo.email,
      password: loginInfo.password
    })
  })
  .then((response) => {
    var contentType = response.headers.get("content-type");
    if(contentType && contentType.indexOf("application/json") !== -1) {
      return response.json().then( (json) => {
        if (response.status !== 200) {
          console.log(json.message); //if error occured 
        }
        else {
          console.log(json.message);
          if (json.token) {
            localStorage.token = json.token;
          }
        }
      })

    }
  })
  .catch( (error) => {
    console.error(error);
  });
}

onLogoutSubmit = () => {
  //TODO:
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
            onLoginSubmit: this.onLoginSubmit,
            onLogoutSubmit: this.onLogoutSubmit
          })
        )}
      </div>
    );
  }
}

export default App;
