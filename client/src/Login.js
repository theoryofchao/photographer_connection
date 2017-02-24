import React, { Component } from 'react';
// import './App.css';


class Login extends Component {
  render() {
    return (
        <div style={{border: "solid 1px black", padding: "10px"}}>
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