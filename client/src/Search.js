import React, { Component } from 'react';
// import './App.css';
import SearchResult from './SearchResult.js'


var borderStyles = {
  border: "solid 1px black",
  padding: "10px",
  overflow: "auto"
}

class Search extends Component {

  componentWillMount() {
    this.props.sampleProfiles();
  }

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
          {this.props.searchResults.map((result, index) => {
            return <SearchResult key={index} result={result}/>
          })}
        </div>
    );
  }
}

export default Search;