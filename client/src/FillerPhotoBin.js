import React, { Component } from 'react';
// import './App.css';
import FillerPhoto from './FillerPhoto.js';

var borderStyles = {
  border: "solid 1px black",
  padding: "10px"
}

class FillerPhotoBin extends Component {

  componentWillMount() {
    this.props.onFeaturePhotos();
  }

  render() {
    return (
        <div style={borderStyles}>
          FillerPhotoBin
          {this.props.photos.map((photo, index) => {
            return <FillerPhoto key={index} photo={photo}/>  
          })}
        </div>
    );
  }
}

export default FillerPhotoBin;