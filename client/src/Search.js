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
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" value="all" />
                      All
                    </label>
                  </div>
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" value="toronto" />
                      Toronto
                    </label>
                  </div>
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" value="montreal" />
                      Montreal
                    </label>
                  </div>
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" value="vancouver" />
                      Vancouver
                    </label>
                  </div>
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