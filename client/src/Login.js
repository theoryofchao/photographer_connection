import React, { Component } from 'react';
// import './App.css';

var borderStyles = {
  border: "solid 1px black",
  padding: "10px"
}

class Login extends Component {

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onLoginSubmit(this.props.login);
    this.props.router.push("/");
  }

  render() {
    return (
        <form style={borderStyles} onSubmit={this.onFormSubmit}>
          Login
            <label>
             E-mail:
              <input type="email" name="email" onChange={this.props.handleLoginChange}/>
            </label>
            <label>
             Password:
              <input type="password" name="password" onChange={this.props.handleLoginChange}/>
            </label>
            <input type="submit" value="Submit" />
        </form>
    );
  }
}

export default Login;