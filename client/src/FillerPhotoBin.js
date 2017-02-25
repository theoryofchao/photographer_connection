import React, { Component } from 'react';
// import './App.css';
import FillerPhoto from './FillerPhoto.js';

var borderStyles = {
  border: "solid 1px black",
  padding: "10px"
}


class FillerPhotoBin extends Component {
  render() {
    return (
        <div style={borderStyles}>
          FillerPhotoBin
          <FillerPhoto />
        </div>
    );
  }
}

export default FillerPhotoBin;