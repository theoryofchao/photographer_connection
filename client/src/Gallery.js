import React, { Component, Children, cloneElement } from 'react';
import { Link } from 'react-router';

var borderStyles = {
  border: "solid 1px black",
  padding: "10px"
}


class Gallery extends Component {

  render() {
    return (
      <div style={borderStyles}>
        Gallery<br />
        <Link to="user-profile/1/album/1">Album</Link><br />
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