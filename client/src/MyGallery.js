import React, { Component } from 'react';


var borderStyles = {
  border: "solid 1px black",
  padding: "10px"
}

class MyGallery extends Component {
  render() {
    return (
      <div style={borderStyles}>
        Edit Gallery<br />
      </div>
    );
  }
}

export default MyGallery;