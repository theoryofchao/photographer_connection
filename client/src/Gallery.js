import React from 'react';
import { Link } from 'react-router';

var borderStyles = {
  border: "solid 1px black",
  padding: "10px"
}

const Gallery = ({ children }) => (
  <div style={borderStyles}>
    Gallery<br />
    <Link to="user-profile/album">Album</Link><br />
    {children}
  </div>
);

export default Gallery;