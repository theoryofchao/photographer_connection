import React, { Component } from 'react';
import SearchResult from './SearchResult.js'
var Carousel = require('nuka-carousel');
import { Link } from 'react-router';


var styles = {
  maxHeight: "211px",
  overflow: "hidden",
  backgroundColor: '#0D141A'
}

let searchBarStyle = {
  backgroundColor: '#0D141A',
  "padding-top": "65px",
}

class Search extends Component {
  mixins: [Carousel.ControllerMixin]
  componentWillMount() {
    this.props.sampleProfiles();
  }

  render() {
    return (
        <div className="searchBar" style={searchBarStyle}>
          <Carousel style={styles} slidesToShow={5} slidesToScroll={5}>
            {this.props.searchResults.map((result, index) => {
              return <SearchResult key={index} result={result} resetAlbumParam={this.props.resetAlbumParam}/>
            })}
          </Carousel>
       </div>
    );
  }
}

export default Search;