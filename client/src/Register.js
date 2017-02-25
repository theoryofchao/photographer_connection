import React, { Component } from 'react';


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
            <input type="submit" value="Submit" onClick={this.context.onRegistrationSubmit}/>

        </div>
    );
  }
}

Register.contextTypes = {
  onRegistrationSubmit: React.PropTypes.func
}

export default Register;