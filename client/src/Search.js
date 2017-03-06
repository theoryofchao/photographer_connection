import React, { Component } from 'react';
import SearchResult from './SearchResult.js'
var Carousel = require('nuka-carousel');
import { Link } from 'react-router';


var styles = {
  maxHeight: "211px",
}

class Search extends Component {
  mixins: [Carousel.ControllerMixin]
  componentWillMount() {
    this.props.sampleProfiles();
  }

  render() {
    return (
        <div>
        <Link to="/">Home</Link>
         <Carousel style={styles} slidesToShow={5} cellAlign="center" slidesToScroll={5}>
          {this.props.searchResults.map((result, index) => {
            return <SearchResult key={index} result={result} resetAlbumParam={this.props.resetAlbumParam}/>
          })}
         </Carousel>
       </div>
    );
  }
}

export default Search;