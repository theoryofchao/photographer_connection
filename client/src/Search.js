import React, { Component } from 'react';
// import './App.css';
import SearchResult from './SearchResult.js'
var Carousel = require('nuka-carousel');

var borderStyles = {
  border: "solid 1px black",
  padding: "10px"
}

class Search extends Component {
   mixins: [Carousel.ControllerMixin]
  componentWillMount() {
    this.props.sampleProfiles();
  }

  render() {
    return (
        <div style={borderStyles}>
          Search<br />
         <Carousel slidesToShow={5} cellAlign="center" slidesToScroll={6}>
          {this.props.searchResults.map((result, index) => {
            return <SearchResult key={index} result={result}/>
          })}
         </Carousel>
       </div>
    );
  }
}

export default Search;