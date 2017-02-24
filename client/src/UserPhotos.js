import React, { Component } from 'react';
import { Link } from 'react-router';

class UserPhotos extends Component {
  render() {
    return (
        <div style={{border: "solid 1px black", padding: "10px"}}>
          User Photos
          {this.props.children}
        </div>
    );
  }
}

export default UserPhotos;