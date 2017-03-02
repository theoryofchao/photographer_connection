import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import TextField from 'material-ui/TextField';

var borderStyles = {
  border: "solid 1px black",
  padding: "10px"
}

var titleStyle = {
  textAlign: "center",
  color: "red"
}

class MyGallery extends Component {
  constructor(props) {
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onImageDrop(files) {
    this.props.handlePhotoUpload(files[0]);
    this.props.handleImageUpload(files[0], 'http://localhost:8080/photos/new', 'gallery');
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    // console.log(this.nameInput.input.value);
    // console.log(this.descriptionInput.input.value);
    this.props.createMyAlbum(localStorage.user_id, this.nameInput.input.value, this.descriptionInput.input.value);
    this.nameInput.input.value = "";
    this.descriptionInput.input.value = "";
  }


  render() {
    return (
      <div style={borderStyles}>
        <div className="FileUpload" style={titleStyle}>
          <Dropzone
            multiple={true}
            accept="image/*"
            onDrop={this.onImageDrop.bind(this)}>
            <h3>Gallery</h3>
            <p>Drop an image or click to select a file to upload.</p>
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
          <form onSubmit={this.onFormSubmit.bind(this)}>
            <TextField type="string" name="name" floatingLabelText="Album Name" hintText="Enter Your Album"  ref={(input) => this.nameInput = input}/>
            <TextField type="string" name="description" floatingLabelText="Description" hintText="Enter Your Description"  ref={(input) => this.descriptionInput = input}/>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default MyGallery;