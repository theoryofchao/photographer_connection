import React, { Component } from 'react';
// import './App.css';
import FillerPhoto from './FillerPhoto.js';

class FillerPhotoBin extends Component {
  render() {
    return (
        <div style={{border: "solid 1px black", padding: "10px"}}>
          FillerPhotoBin
          <FillerPhoto />
        </div>
    );
  }
}

export default FillerPhotoBin;