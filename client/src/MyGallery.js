import React, { Component } from 'react';
import Dropzone from 'react-dropzone';


var borderStyles = {
  border: "solid 1px black",
  padding: "10px"
}

class MyGallery extends Component {
  onImageDrop(files) {
    console.log("this!", this)
    this.props.handlePhotoUpload(files[0]);
    this.props.handleImageUpload(files[0]);
  }

  render() {
    console.log('rendering mygallery', this.props);
    return (
      <div style={borderStyles}>
        Edit Gallery<br />
        <div className="FileUpload">
          <Dropzone
            multiple={false}
            accept="image/*"
            onDrop={this.onImageDrop.bind(this)}>
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