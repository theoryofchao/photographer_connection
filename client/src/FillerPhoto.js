import React, { Component } from 'react';
// import './App.css';

var borderStyles = {
  border: "solid 1px black",
  padding: "10px"
}

var size = {
  height: "350px",
  width: "350px",
  padding: "25px",
  border: "solid 4px yellow"
}

// var images = {
//   fish: "http://i.imgur.com/nemjxlN.jpg",
//   octopus: "http://i.imgur.com/2f0XvJC.jpg",
//   turtle: "http://i.imgur.com/syAAYDe.jpg"
// }

class FillerPhoto extends Component {
  render() {
    return (
      <div style={borderStyles}>
        <img style={size} src={this.props.photo.file_location} alt="1"/>
      </div>
    );
  }
}

export default FillerPhoto;