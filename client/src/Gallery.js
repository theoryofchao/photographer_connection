import React, { Component } from 'react';
import { Link } from 'react-router';


class Gallery extends Component {
  render() {
    return (
        <div style={{border: "solid 1px black", padding: "10px"}}>
          Gallery
          <ul>
            <li><Link to="/album">Album</Link></li>
            <li><Link to="/photo">Photo</Link></li>
          </ul>
          {this.props.children}
        </div>
    );
  }
}

export default Gallery;