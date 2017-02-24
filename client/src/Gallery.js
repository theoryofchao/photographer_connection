import React from 'react';
import { Link } from 'react-router';


const Gallery = ({ children }) => (
  <div style={{border: "solid 1px black", padding: "10px"}}>
    Gallery<br />
    <Link to="user-profile/album">Album</Link><br />
    {children}
  </div>
);

export default Gallery;