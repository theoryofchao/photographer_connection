import React, { Component } from 'react';
import {AppBar} from 'material-ui';
import FlatButton from 'material-ui/FlatButton';

var style = {
  backgroundColor: "#afb5bf"
}

class Navigate extends Component {

  render() {
    if (this.props.userA) {
      return (
        <div >
          <AppBar
            iconElementLeft={null}
            style={style}
            title="Focus"
            >
              <FlatButton
                href="/#/"
                label="Home"
              />
              <FlatButton
                href="/#/my-profile"
                label="My Profile"
              />
              <FlatButton
                href="/#/"
                label="Logout"
                onClick={(e)=>{this.props.onLogoutClick()}}
            />
          </AppBar>
        </div>
       )
    } else {
      return (
        <div>
          <AppBar
            iconElementLeft={null}
            style={style}
            title="Focus"
          >
            <FlatButton
              href="/#/"
              label="Home"
            />
            <FlatButton
              href="/#/register"
              label="Register"
            />
            <FlatButton
              href="/#/login"
              label="Login"
              onClick={(e)=>{this.props.onLogoutClick()}}
          />
          </AppBar>
        </div>
    )}
  }
}

export default Navigate;