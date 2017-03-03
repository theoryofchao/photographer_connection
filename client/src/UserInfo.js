import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';
import DatePicker from 'material-ui/DatePicker';
import FlatButton from 'material-ui/FlatButton';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import { Link } from 'react-router';

var style = {
  backgroundColor: "lightgrey",
  height: "200px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start"
}

var info = {
  listStyleType: "none",
  padding: "20px"
}

var description = {
    alignItems: "center",
    display: "flex",
    width: "22%",
    padding: "75px",
    border: "dotted 2px #b2b2b2"

}

var styles = {
  block: {
    maxWidth: 250,
  },
  radioButton: {
    marginBottom: 16,
  },
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
            <div style={info}>
              <span>{this.props.userProfile.first_name} {this.props.userProfile.last_name}</span><br /><br />
              <span>@{this.props.userProfile.handle}</span><br /><br />
              <span>{this.props.userProfile.location_string}</span><br /><br />
              <span>{this.props.userProfile.years_exp} Years Of Experience</span><br /><br />
              <span>Contact: {this.props.userProfile.email}</span><br /><br />
            </div>
            <p style={description}>{this.props.userProfile.summary}</p>
            <div style={{paddingLeft: "20px"}}>
              <h4 style={{margin: "9px"}}> Request a Consultation With {this.props.userProfile.first_name} </h4>
              <DatePicker hintText="Select A Date" />
              <RadioButtonGroup name="shipSpeed" defaultSelected="Light">
                <RadioButton
                  value="Light"
                  label="In-Person Consultation"
                  style={styles.radioButton}
                />
                <RadioButton
                  value="Dark"
                  label="Live Chat Consultation"
                  style={styles.radioButton}
                />
              </RadioButtonGroup>
                <Link to={"/"}><FlatButton
                  style={{backgroundColor: "#b2b2b2"}}
                  icon={<ActionAndroid />}
                /></Link>
            </div>
        </div>

    );
  }
}

export default UserInfo;