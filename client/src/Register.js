import React, { Component } from 'react';
// import './App.css';


class Register extends Component {
  render() {
    return (
        <div style={{border: "solid 1px black", padding: "10px"}}>
          Register
            <label>
             E-mail:
              <input type="email" name="email" />
            </label>
            <label>
             Password:
              <input type="password" name="password" />
            </label>
            <label>
            Confirm Password:
              <input type="password" name="password-confirm"/>
            </label>
            <input type="submit" value="Submit" />



        </div>
    );
  }
}

export default Register;