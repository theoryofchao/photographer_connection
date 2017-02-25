import React, { Component } from 'react';
// import './App.css';

var borderStyles = {
  border: "solid 1px black",
  padding: "10px"
}

class Photo extends Component {
  render() {
    return (
        <div style={borderStyles}>
          Photo
        </div>
    );
  }
}

export default Photo;