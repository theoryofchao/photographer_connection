import React, { Component } from 'react';
// import './App.css';

var borderStyles = {
  border: "solid 1px black",
  padding: "10px"
}

var images = {
  fish: "http://i.imgur.com/nemjxlN.jpg",
  octopus: "http://i.imgur.com/2f0XvJC.jpg",
  turtle: "http://i.imgur.com/syAAYDe.jpg"
}

class FillerPhoto extends Component {
  render() {
    return (
        <div style={borderStyles}>
          FillerPhoto
          <img src={images.fish} alt="1"/>
          <img src={images.octopus} alt="2"/>
          <img src={images.turtle} alt="3"/>
        </div>
    );
  }
}

export default FillerPhoto;