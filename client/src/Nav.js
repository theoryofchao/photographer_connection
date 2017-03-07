import React, { Component } from 'react';
import {AppBar} from 'material-ui';
import FlatButton from 'material-ui/FlatButton';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';

var navStyle = {
  position: "fixed",
  width: "100%",
  height: "64px",
  zIndex: "1000",
  clear: "both"
}

var style = {
  backgroundColor: "#000",
  color: "#fff",
  display: "flex",
  alignItems: "center",
}

class Navigate extends Component {

  render() {
    if (this.props.userA) {
      return (
        <div style={navStyle}>
          <AppBar style={style} title="F o c u s" showMenuIconButton={false}>
            <Badge
              badgeContent={1}
              primary={true}
            >
              <NotificationsIcon />
            </Badge>
              <FlatButton
                href="/#/"
                label="Home"
                style={style}
              />
              <FlatButton
                href="/#/my-profile"
                label="My Profile"
                style={style}
              />
              <FlatButton
                href="/#/"
                label="Logout"
                onClick={(e)=>{this.props.onLogoutClick()}}
                style={style}
            />
          </AppBar>
        </div>
       )
    } else {
      return (
        <div style={navStyle}>
          <AppBar style={style} title="F o c u s" showMenuIconButton={false}>
            <FlatButton
              href="/#/"
              label="Home"
              style={style}
            />
            <FlatButton
              href="/#/register"
              label="Register"
              style={style}
            />
            <FlatButton
              href="/#/login"
              label="Login"
              onClick={(e)=>{this.props.onLogoutClick()}}
              style={style}
          />
          </AppBar>
        </div>
    )}
  }
}

export default Navigate;