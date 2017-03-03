import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';

var style = {
  backgroundColor: "lightgrey",
  height: "200px",
}

var info = {
  display: "inline-block",
  padding: "25px",
  margin: "0 auto",
  listStyleType: "none",
  width: "25%",
  verticalAlign: "top"
}

var listItems = {
  padding: "7px 0"
}

var descript = {
  display: "inline-block",
  verticalAlign: "top",
  padding: "20px 30px",
  width: "35%"
}


class UserInfo extends Component {
  render() {
  let profile_picture_url = this.props.userProfile.profile_picture ? this.props.userProfile.profile_picture : "https://img.clipartfest.com/ae3134c8983b10e4b65d9777294cec41_profile-icon-clip-art-profile-icon-clipart_300-300.png";
    return (
        <div style={style}>
            <Avatar
              src={profile_picture_url}
              size={175}
              style={style}
            />
            <div style={info}>
              <span style={listItems}>{this.props.userProfile.first_name} {this.props.userProfile.last_name}</span><br /><br />
              <span style={listItems}>@{this.props.userProfile.handle}</span><br /><br />
              <span style={listItems}>{this.props.userProfile.location_string}</span><br /><br />
              <span style={listItems}>{this.props.userProfile.years_exp} Years Of Experience</span><br /><br />
              <span style={listItems}>Contact: {this.props.userProfile.email}</span><br /><br />
            </div>
            <p style={descript}>{this.props.userProfile.summary}</p>
        </div>

    );
  }
}

export default UserInfo;