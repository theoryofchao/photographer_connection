import React, { Component } from 'react';
// import './App.css';

var borderStyles = {
  border: "solid 1px black",
  padding: "10px"
}


class Login extends Component {
  render() {
    return (
        <div style={borderStyles}>
          Login
          <form>
            <label>
             E-mail:
              <input type="email" name="email" />
            </label>
            <label>
             Password:
              <input type="password" name="password" />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
    );
  }
}

export default Login;