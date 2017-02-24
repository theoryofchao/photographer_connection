import React, { Component } from 'react';
import { Link } from 'react-router';
import Photo from './Photo.js'



class Album extends Component {
  render() {
    // const { params: { album } } = this.props;

    return (
        <div style={{border: "solid 1px black", padding: "10px"}}>
          Album<br />
          <Photo />
        </div>
    );
  }
}

export default Album;