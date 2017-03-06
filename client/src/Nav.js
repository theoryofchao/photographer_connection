import React, { Component } from 'react';
import {AppBar} from 'material-ui';
import FlatButton from 'material-ui/FlatButton';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';

var style = {
  backgroundColor: "#000",
  color: "#7EBF2D",
  display: "flex",
  alignItems: "center",
}

class Navigate extends Component {

  render() {
    if (this.props.userA) {
      return (
        <div >
          <AppBar style={style} title="Focus"  iconElementLeft={<IconButton></IconButton>}>
            <Badge
              badgeContent={1}
              primary={true}
            >
              <NotificationsIcon />
            </Badge>
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
        <div>
          <AppBar style={style} title="Focus" iconElementLeft={<IconButton></IconButton>}>
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