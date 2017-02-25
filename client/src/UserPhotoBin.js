import React, { Component } from 'react';

var borderStyles = {
  border: "solid 1px black",
  padding: "10px"
}

class UserPhotoBin extends Component {
  render() {
    return (
        <div style={borderStyles}>
          User Photo Bin
        </div>
    );
  }
}

export default UserPhotoBin;