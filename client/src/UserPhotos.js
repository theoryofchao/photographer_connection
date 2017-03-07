import React, { Component } from 'react';
import { Link } from 'react-router';

var borderStyles = {
  border: "solid 1px black",
  padding: "10px",
}

class UserPhotos extends Component {
  render() {
    return (
        <div style={borderStyles}>
          User Photos
          {this.props.children}
        </div>
    );
  }
}

export default UserPhotos;