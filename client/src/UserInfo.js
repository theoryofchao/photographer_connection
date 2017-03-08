import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';
import DatePicker from 'material-ui/DatePicker';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Dialog from 'material-ui/Dialog';

var style = {
  paddingTop: "20px",
  backgroundColor: '#32485B',
  height: "200px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start"
}

var avatarStyle = {
  backgroundColor: '#32485B',
  height: "200px",
  width: "200px",
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

var iconStyle = {
  color: "#7EBF2D"
}

// function genNum(min, max) {
//   return Math.floor(Math.random() * (max - min) + min);
// } ***function worked, but was invoked on any event change, thus problematic

class UserInfo extends Component {
  render() {
  var profile_picture_url = this.props.userProfile.profile_picture ? this.props.userProfile.profile_picture : "https://img.clipartfest.com/ae3134c8983b10e4b65d9777294cec41_profile-icon-clip-art-profile-icon-clipart_300-300.png";
  var actions = [
    <FlatButton
      label="Cancel"
      primary={true}
      onTouchTap={this.props.handleAlertClose}
    />,
    <FlatButton
      label="Send"
      primary={true}
      onTouchTap={this.props.handleAlertClose}
    />,
  ];
  var yearString = '';
  if (this.props.userProfile.years_exp === 1) {
    yearString = "Year Of Experience";
  } else if (this.props.userProfile.years_exp > 1) {
    yearString = "Years Of Experience";
  } else {
    yearString = "No Experience Yet";
  }
    return (
        <div style={style}>
            <Avatar
              src={profile_picture_url}
              style={avatarStyle}
            />
            <div style={info}>
              <span><i style={iconStyle} className="fa fa-user fa-lg" aria-hidden="true"></i>  {this.props.userProfile.first_name} {this.props.userProfile.last_name}</span><br /><br />
              <span><i style={iconStyle} className="fa fa-at fa-lg" aria-hidden="true"></i> {this.props.userProfile.handle}</span><br /><br />
              <span><i style={iconStyle} className="fa fa-map-marker fa-lg" aria-hidden="true"></i>   {this.props.userProfile.location_string}</span><br /><br />
              <span><i style={iconStyle} className="fa fa-camera-retro fa-lg" aria-hidden="true"></i> {this.props.userProfile.years_exp} {yearString}</span><br /><br />
              <span><i style={iconStyle} className="fa fa-envelope-o fa-lg" aria-hidden="true"></i> {this.props.userProfile.email}</span><br /><br />
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
                  <MenuItem value={1} primaryText={"Single Shoot: $21/Hr"}  />
                  <MenuItem value={2} primaryText={"Couples: $41/Hr"} />
                  <MenuItem value={3} primaryText={"Events: $97/Hr"} />
                  <MenuItem value={4} primaryText={"Commercial: $150/Hr"} />
                  <MenuItem value={5} primaryText={"Weddings: approx-$1400"} />
              </SelectField>
              <div>
                <RaisedButton backgroundColor="#32485B" label={<i style={{color: "white"}} className="fa fa-envelope-o fa-2x" aria-hidden="true"></i>} onTouchTap={this.props.handleAlertOpen} />
                <Dialog
                  actions={actions}
                  modal={false}
                  open={this.props.alertOpen}
                  onRequestClose={this.props.handleAlertClose}
                >
                  Send an email to {this.props.userProfile.first_name} {this.props.userProfile.last_name}?
                </Dialog>
              </div>
            </div>
        </div>
    );
  }
}

export default UserInfo;