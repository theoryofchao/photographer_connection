import React, { Component } from 'react';
// import './App.css';
import Album from './Album.js';
import Photo from './Photo.js';


class Gallery extends Component {
  render() {
    return (
        <div style={{border: "solid 1px black", padding: "10px"}}>
          Gallery
          <Album />
          <Photo />
        </div>
    );
  }
}

export default Gallery;