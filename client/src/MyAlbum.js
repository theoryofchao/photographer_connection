import React, { Component } from 'react';
import Dropzone from 'react-dropzone';

// var borderStyles = {
//   border: "solid 1px black",
//   padding: "10px"
// }

var titleStyle = {
  display: "inline-block",
  textAlign: "center",
  marginRight: "10px",
  marginBottom: "10px",
  veritcalAlign: "top"
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
        <button onClick={this.props.handleShowAlbum(this.props.album)}>Show</button>
      </div>
    );
  }
}

export default MyAlbum;