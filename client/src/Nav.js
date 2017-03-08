import React, { Component } from 'react';
import {AppBar} from 'material-ui';
import FlatButton from 'material-ui/FlatButton';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import Badge from 'material-ui/Badge';
import Toggle from 'material-ui/Toggle';

const styles = {
  toggle: {
    marginBottom: 16,
  },
  thumbOff: {
    backgroundColor: '#E8E9EB',
  },
  trackOff: {
    backgroundColor: '#e5ad20',
  },
  thumbSwitched: {
    backgroundColor: '#F06543',
  },
  trackSwitched: {
    backgroundColor: '#E0DFD5',
  },
  labelStyle: {
    color: 'white',
  },
};


var navStyle = {
  position: "fixed",
  width: "100%",
  height: "64px",
  zIndex: "1000",
  clear: "both"
}

var style = {
  backgroundColor: "#313638",
  color: "#e5ad20",
  display: "flex",
  alignItems: "center",
}

var badgeStyle = {
  top: "7px",
  right: "7px",
  width: "20px",
  height: "20px",
}

var iconStyle = {
  color: "#e5ad20"
}

class Navigate extends Component {

  render() {
    if (this.props.userA) {
      return (
        <div style={navStyle}>
          <AppBar style={style} title="&nbsp;&nbsp;F o c u s" iconElementLeft={<a href="/#/"><img height="50px" src="aperature.png" role="presentation"/></a>}>
             <div>
              <Toggle
              label="Change Style"
              thumbStyle={styles.thumbOff}
              trackStyle={styles.trackOff}
              thumbSwitchedStyle={styles.thumbSwitched}
              trackSwitchedStyle={styles.trackSwitched}
              labelStyle={styles.labelStyle}
            />
            </div>
            <Badge
              badgeContent={1}
              primary={true}
              badgeStyle={badgeStyle}
            >
            <NotificationsIcon style={iconStyle}/>
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
          <AppBar style={style} title="&nbsp;&nbsp;F o c u s" iconElementLeft={<a href="/#/"><img height="50px" src="aperature.png" role="presentation"/></a>}>
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
              style={style}
          />
          </AppBar>
        </div>
    )}
  }
}

export default Navigate;