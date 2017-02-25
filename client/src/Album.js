import React, { Component } from 'react';
import Photo from './Photo.js'

var borderStyles = {
  border: "solid 1px black",
  padding: "10px"
}

class Album extends Component {
  render() {
    return (
        <div style={borderStyles}>
          Album<br />
          <Photo />
        </div>
    );
  }
}

export default Album;