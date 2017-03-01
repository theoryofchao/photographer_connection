import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import TextField from 'material-ui/TextField'
var parent = {
  display: "inline-block",
  padding: "25px",
  textAlign: "center",
  width: "90%",
  backgroundImage: "radial-gradient(white, black)"
}
var titleStyle = {
  display: "inline-block",
  color: "black",
  padding: "35px"
}
  var child = {
    padding: "20px"
  }
class MyInfo extends Component {
  onImageDrop(files) {
    this.props.handleProfileImageUpload(files[0]);
    this.props.handleImageUpload(files[0], 'http://localhost:8080/users/profile_image');
  }
  onFormSubmit = (e) => {
    e.preventDefault();
    console.log('CURRENT USER:', this.props.myProfile);
    this.props.onInfoSubmit(this.props.myProfile);
  }
  render() {
    return (
      <div style={parent}>
        <div style={titleStyle} className="FileUpload">
          <Dropzone
            multiple={false}
            accept="image/*"
            onDrop={this.onImageDrop.bind(this)}>
            <h3>Profile Picture</h3>
            <p>Drop an image or click to select a file to upload</p>
          </Dropzone>
        </div>
        <div>
          {this.props.uploadedFileCloudinaryUrl === '' ? null :
          <div>
            <p>{this.props.uploadedFile}</p>
            <img src={this.props.uploadedFileCloudinaryUrl} role="presentation" />
          </div>}
        </div>
        <div className="form">
          <form style={child} onSubmit={this.onFormSubmit.bind(this)} >
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
             /> <br />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}
export default MyInfo;