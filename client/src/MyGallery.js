import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';

const CLOUDINARY_UPLOAD_PRESET = 'hmxzziag';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/lighthouse-cdr/upload'

var borderStyles = {
  border: "solid 1px black",
  padding: "10px"
}

class MyGallery extends Component {
  onImageDrop(files) {
    this.setState({
      uploadedFile: files[0]
    })
    console.log("STATE",this.state);
    console.log("FILE", files[0])
    this.handleImageUpload(files[0]);
  }

  handleImageUpload(file) {
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
                        .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                        .field('file', file);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }

      if (response.body.secure_url !== '') {
        this.setState({
          uploadedFileCloudinaryUrl: response.body.secure_url
        });
      }
    });
  }


  render() {
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