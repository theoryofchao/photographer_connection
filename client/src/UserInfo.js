import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';

var profile = {
  display: "inline-block",
  height: "150px",
  borderRadius: "50%",
  float: "left",
  padding: "25px"
}

var info = {
  display: "inline-block",
  paddingTop: "-20px",
  margin: "0 auto",
  listStyleType: "none"
}

var listItems = {
  padding: "7px 0"
}

var descript = {
  display: "inline-block",
  verticalAlign: "top",
  padding: "7px 20px",
  maxWidth: "30%"
}

var style = {
  margin: 5,

  backgroundColor: "lightgrey"
};

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

              <ul style={info}>
                <li style={listItems}>{this.props.userProfile.first_name} {this.props.userProfile.last_name}</li>
                <li style={listItems}>@{this.props.userProfile.handle}</li>
                <li style={listItems}>{this.props.userProfile.location_string}</li>
                <li style={listItems}>{this.props.userProfile.years_exp} Years Of Experience</li>
                <li style={listItems}>Contact: {this.props.userProfile.email}</li>
              </ul>
              <p style={descript}>{this.props.userProfile.summary}</p>



        </div>
    );
  }
}

export default UserInfo;