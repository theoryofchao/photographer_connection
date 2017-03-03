import React, { Component } from 'react';
// import Photo from './Photo.js'

class Album extends Component {
  render() {
    console.log("ALBUM STATE:", this.props);
    return (
        <div>
          Album
          {this.props.photos.map((photo, i) => (
            <img key={i} src={photo.file_location} role="presentation"/>
          ))}
        </div>
    );
  }
}

export default Album;

          // <Photo />
