import React, { Component } from 'react';
import SearchResult from './SearchResult.js'
var Carousel = require('nuka-carousel');


var searchBarStyle = {
  background: '#E0DFD5',
  paddingTop: "65px",
}

var styles = {
  maxHeight: "211px",
  overflow: "hidden",
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
          <div style={{margin: "20px"}}>
          </div>
       </div>
    );
  }
}

export default Search;