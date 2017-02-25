import React, { Component } from 'react';
// import './App.css';

var borderStyles = {
  border: "solid 1px black",
  padding: "10px"
}

class Register extends Component {
  render() {
    return (
        <div style={borderStyles}>
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