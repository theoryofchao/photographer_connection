import React, { Component } from 'react';
// import './App.css';

var borderStyles = {
  border: "solid 1px black",
  padding: "10px"
}

class Login extends Component {

  handleChange = (e) => {
    let key;
    if (e.target.name === 'email') {
      key = 'email';
    } else {
      key = 'password';
    }

    const login = this.props.login;
    login[key] = e.target.value;
    this.setState({login: {login}})
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onLoginSubmit(this.props.login);
  }

  render() {
    return (
        <form style={borderStyles} onSubmit={this.onFormSubmit}>
          Login
            <label>
             E-mail:
              <input type="email" name="email" onChange={this.handleChange}/>
            </label>
            <label>
             Password:
              <input type="password" name="password" onChange={this.handleChange}/>
            </label>
            <input type="submit" value="Submit" />
        </form>
    );
  }
}

export default Login;