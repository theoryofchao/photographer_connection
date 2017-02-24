import React, { Component } from 'react';
import { Link } from 'react-router';



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