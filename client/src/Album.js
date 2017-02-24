import React, { Component } from 'react';
// import './App.css';
import { Link } from 'react-router';
import Photo from './Photo.js'


class Album extends Component {
  render() {
    return (
        <div style={{border: "solid 1px black", padding: "10px"}}>
          Album
          <Link to="user-profile/album">Album</Link><br />
          {this.props.children}
        </div>
    );
  }
}

export default Album;