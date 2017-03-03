import React, { Component, Children, cloneElement } from 'react';
import { Link } from 'react-router';

var borderStyles = {
  border: "solid 1px black",
  padding: "10px"
}


class Gallery extends Component {

  render() {

    console.log(this.props);
    return (
      <div style={borderStyles}>
        Gallery<br />

        {this.props.userAlbums.map((album, index) => {
          
          return <Link to="user-profile/1/album/{album.album_id}">{album.name}</Link>
        })}
        {Children.map(this.props.children, child =>
          cloneElement(child, {
            ...this.props,
            ...this.state,
          })
        )}
      </div>
    )
  }
};

export default Gallery;