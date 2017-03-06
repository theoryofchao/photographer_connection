import React, { Component } from 'react';
// import Photo from './Photo.js'

var style = {
  objectFit: "contain",
  maxHeight: "400px",
  border: "solid 2px grey",
  padding: "2px"
}

class Album extends Component {
  render() {
    return (
        <div>
          {this.props.photos.map((photo, i) => (
            <img key={i} src={photo.file_location} style={style} role="presentation"/>
          ))}
        </div>
    );
  }
}

export default Album;