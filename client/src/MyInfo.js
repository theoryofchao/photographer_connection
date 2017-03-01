import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';


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
  state = {
    value: 1,
  };
  handleChange = (event, index, value) => this.setState({value});
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

            <div className="form" >
              <form style={child}>
                <TextField
                  type="name"
                  name="firstName"
                  floatingLabelText="First Name"
                  hintText="Enter Your First Name"
                 /> <br />
                <TextField
                  type="name"
                  name="lastName"
                  floatingLabelText="Last Name"
                  hintText="Enter Your Last Name"
                /> <br />
                <TextField
                  type="name"
                  name="handle"
                  floatingLabelText="Handle"
                  hintText="Enter Your Unique Handle"
                 /> <br />
                <TextField
                  type="location"
                  name="location"
                  floatingLabelText="Location"
                  hintText="Enter Your Location"
                /> <br />
                <TextField
                  type="description"
                  name="description"
                  floatingLabelText="About Me"
                  multiLine={true}

                 /> <br />
                <SelectField

                  floatingLabelText="Years Of Experince"
                  value={this.state.value}
                  onChange={this.handleChange}
                >
                  <MenuItem value={1} primaryText="Under 1 Year" />
                  <MenuItem value={2} primaryText="1+ Years" />
                  <MenuItem value={3} primaryText="3+ Years" />
                  <MenuItem value={4} primaryText="5+ Years" />
                  <MenuItem value={5} primaryText="10+ Years" />
                </SelectField> <br />
                <input type="submit" value="Submit" />
              </form>

            </div>
          </div>
    );
  }
}

export default MyInfo;