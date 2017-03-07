import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';
import DatePicker from 'material-ui/DatePicker';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

var style = {
  paddingTop: "20px",
  backgroundColor: '#32485B',
// backgroundColor: "#344d65",
  height: "200px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start"
}

var avatarStyle = {
  // backgroundColor: "#233443",
  backgroundColor: '#32485B',//'linear-gradient( 180deg, #32485B, #638BAE 30%, #21303E)',
  height: "200px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  padding: "30px"
}

var info = {
  listStyleType: "none",
  padding: "20px",
  color: 'white'
}

var description = {
    alignItems: "center",
    display: "flex",
    width: "20%",
    padding: "50px",
    border: "dotted 2px #b2b2b2",
    color: 'white'
}

var consultation = {
  paddingLeft: "100px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column"
}

function genNum(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

class UserInfo extends Component {
  render() {
  let profile_picture_url = this.props.userProfile.profile_picture ? this.props.userProfile.profile_picture : "https://img.clipartfest.com/ae3134c8983b10e4b65d9777294cec41_profile-icon-clip-art-profile-icon-clipart_300-300.png";

    return (
        <div style={style}>
            <Avatar
              src={profile_picture_url}
              size={175}
              style={avatarStyle}
            />
            <div style={info}>
              <span>{this.props.userProfile.first_name} {this.props.userProfile.last_name}</span><br /><br />
              <span>@{this.props.userProfile.handle}</span><br /><br />
              <span>{this.props.userProfile.location_string}</span><br /><br />
              <span>{this.props.userProfile.years_exp} Year(s) Of Experience</span><br /><br />
              <span>Contact: {this.props.userProfile.email}</span><br /><br />
            </div>
            <p style={description}>{this.props.userProfile.summary}</p>
            <div style={consultation}>
              <h4 style={{margin: "9px", color: 'white'}}> Request a Consultation With {this.props.userProfile.first_name} </h4>
              <DatePicker
              hintText="Select A Date"
              hintStyle={{color: "#B1B1B1"}}
              inputStyle={{color: "#7EBF2D"}}
              />
              <SelectField
                  labelStyle={{color: "#7EBF2D"}}
                  hintText="Choose Your Shoot"
                  hintStyle={{color: "#B1B1B1"}}
                  value={this.props.menuItemValue}
                  onChange={this.props.menuItemChange}
                >
                  <MenuItem value={1} primaryText={"Single Shoot: $" + genNum(21, 29) + "/Hr"}  />
                  <MenuItem value={2} primaryText={"Couples: $" + genNum(41, 49) + "/Hr"} />
                  <MenuItem value={3} primaryText={"Events: $" + genNum(101, 119) + "/Hr"} />
                  <MenuItem value={4} primaryText={"Commercial: $" + genNum(150, 159) + "/Hr"} />
                  <MenuItem value={5} primaryText={"Weddings: $" + genNum(1220, 1299)} />
              </SelectField>
                <Link to={"/"}><FlatButton
                  style={{backgroundColor: "#b2b2b2"}}
                  icon={<i className="fa fa-envelope-o fa-2x" aria-hidden="true"></i>}
                /></Link>

            </div>
        </div>
    );
  }
}

export default UserInfo;