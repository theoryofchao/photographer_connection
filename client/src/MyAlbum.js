import React, { Component } from 'react';
import Dropzone from 'react-dropzone';

var titleStyle = {
  display: "inline-block",
  textAlign: "center",
  marginRight: "10px",
  marginBottom: "10px",
  veritcalAlign: "top"
}

var button = {
  padding: "8px",
  backgroundColor: "#0e2d49",
  color: "#F06543",
  fontSize: "0.8em",
}

class MyAlbum extends Component {

  onImageDrop(files) {

    this.props.handleImageUpload(files[0], `http://localhost:8080/photos/new/${this.props.album.album_id}`, 'gallery');
  }

    render() {
    return (
      <div className="FileUpload" style={titleStyle}>
        <Dropzone
          multiple={true}
          accept="image/*"
          onDrop={this.onImageDrop.bind(this)}
        >
          <h3>{this.props.album.name}</h3>
          <p>Drop an image or click to select a file to upload.</p>
        </Dropzone>
        <button style={button} onClick={this.props.handleShowAlbum(this.props.album)}>Show</button>
      </div>
    );
  }
}

export default MyAlbum;