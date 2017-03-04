import React, { Component } from 'react';
import SearchResult from './SearchResult.js'
var Carousel = require('nuka-carousel');


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
         <Carousel style={styles} slidesToShow={5} cellAlign="center" slidesToScroll={5}>
          {this.props.searchResults.map((result, index) => {
            return <SearchResult key={index} result={result}/>
          })}
         </Carousel>
       </div>
    );
  }
}

export default Search;