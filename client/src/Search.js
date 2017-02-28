import React, { Component } from 'react';
// import './App.css';
import { Link } from 'react-router';



var borderStyles = {
  border: "solid 1px black",
  padding: "10px"
}

class Search extends Component {
  render() {
    return (
        <div style={borderStyles}>
          Search<br />
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <form>
                    <label>
                      <input type="checkbox" value="all" />
                      All
                    </label>
                    <label>
                      <input type="checkbox" value="toronto" />
                      Toronto
                    </label>
                    <label>
                      <input type="checkbox" value="montreal" />
                      Montreal
                    </label>
                    <label>
                      <input type="checkbox" value="vancouver" />
                      Vancouver
                    </label>
                </form>
              </div>
            </div>
         </div>
          <Link to="/user-profile">User Profile</Link>
        </div>
    );
  }
}

export default Search;