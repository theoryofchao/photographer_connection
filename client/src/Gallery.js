import React, { Component } from 'react';
import Album from './Album.js'


class Gallery extends Component {
  render() {
    return (
        <div style={{border: "solid 1px black", padding: "10px" }}>
          Gallery<br />
          <Album />
          {this.props.children}
        </div>
    );
  }
}

export default Gallery;