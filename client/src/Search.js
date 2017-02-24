import React, { Component } from 'react';
// import './App.css';
import { Link } from 'react-router';



class Search extends Component {
  render() {
    return (
        <div style={{border: "solid 1px black", padding: "10px"}}>
          Search<br />
          <Link to="/user-profile">User Profile</Link>
        </div>
    );
  }
}

export default Search;