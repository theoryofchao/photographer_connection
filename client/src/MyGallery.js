import React, { Component } from 'react';
import Dropzone from 'react-dropzone';

var borderStyles = {
  border: "solid 1px black",
  padding: "10px"
}

var titleStyle = {
  textAlign: "center",
  color: "red"
}

class MyGallery extends Component {
  onImageDrop(files) {
    this.props.handlePhotoUpload(files[0]);
    this.props.handleImageUpload(files[0], 'http://localhost:8080/photos/new');
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
      </div>
    );
  }
}

export default MyGallery;