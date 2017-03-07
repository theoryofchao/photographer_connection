import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import TextField from 'material-ui/TextField';

var main = {
  padding: "25px",
  width: "100%",
  height: "100%",
  boxSizing: "border-box",
  background: 'linear-gradient( 180deg, #1a2733, #111a22 )',
  color: 'white'
}

var left = {
  display: "inline-block",
  width: "50%",
  height: "100%",
  borderRight: "solid 2px black"
}

var right = {
  display: "inline-block",
  width: "45%",
  height: "100%",
  paddingLeft: "3%",
  verticalAlign: "top"
}


class MyInfo extends Component {
  static defaultProps = {
    center: {lat: 59.938043, lng: 30.337157},
    zoom: 9,
    greatPlaceCoords: {lat: 59.724465, lng: 30.080121}
  };


  onImageDrop(files) {
    this.props.handleProfileImageUpload(files[0]);
    this.props.handleImageUpload(files[0], 'http://localhost:8080/users/profile_image', 'profile_image');
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    console.log('CURRENT USER:', this.props.myProfile);
    this.props.onInfoSubmit(this.props.myProfile);
  }

  render() {
    return (
        <div style={main}>
          <h2 style={{textAlign: "center", margin: "0 0 10px 0"}}>Profile for {this.props.currentUser.email}</h2>
          <div style={left}>
            <div className="FileUpload">
              <Dropzone
                multiple={false}
                accept="image/*"
                onDrop={this.onImageDrop.bind(this)}>
                <h4 style={{textAlign: "center"}}><u>Update profile picture</u></h4>
                <p style={{textAlign: "center", fontSize: "0.85em"}}>Drop an image or click<br />to select a file to upload</p>
              </Dropzone>
            </div>

            <div>
              {this.props.myProfile.profile_picture === '' ? null :
              <div>
                <p>{this.props.uploadedFile}</p>
                <img style={{maxWidth: "75%", maxHeight: "75%"}}src={this.props.myProfile.profile_picture} role="presentation" />
              </div>}
            </div>
          </div>


          <form style={right} onSubmit={this.onFormSubmit.bind(this)} >
            <h3><u>Update your info</u></h3>
            <TextField
              type="name"
              name="first_name"
              value={this.props.myProfile.first_name}
              floatingLabelText="First Name"
              hintText="Enter Your First Name"
              onChange={this.props.handleInfoChange}
             /> <br />
            <TextField
              type="name"
              name="last_name"
              value={this.props.myProfile.last_name}
              floatingLabelText="Last Name"
              hintText="Enter Your Last Name"
              onChange={this.props.handleInfoChange}
            /> <br />
            <TextField
              type="name"
              name="handle"
              value={this.props.myProfile.handle}
              floatingLabelText="Handle"
              hintText="Enter Your Unique Handle"
              onChange={this.props.handleInfoChange}
             /> <br />
            <TextField
              type="location"
              name="location_string"
              value={this.props.myProfile.location_string}
              floatingLabelText="Location"
              hintText="Enter Your Location"
              onChange={this.props.handleInfoChange}
            /> <br />
            <TextField
              type="summary"
              name="summary"
              value={this.props.myProfile.summary}
              floatingLabelText="About Me"
              multiLine={true}
              onChange={this.props.handleInfoChange}
             /> <br />
            <TextField
              type="number"
              name="years_exp"
              value={this.props.myProfile.years_exp}
              floatingLabelText="How long have you been shooting?"
              hintText="No. of years"
              onChange={this.props.handleInfoChange}
             /> <br /><br />
            <input type="submit" value="Submit" />
          </form>
        </div>
    );
  }
}
export default MyInfo;