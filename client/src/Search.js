import React, { Component } from 'react';
// import './App.css';
import SearchResult from './SearchResult.js'
var Carousel = require('nuka-carousel');

var borderStyles = {
  height: "211px"
}

class Search extends Component {
   mixins: [Carousel.ControllerMixin]
  componentWillMount() {
    this.props.sampleProfiles();
  }

  render() {
    return (
        <div >
          Search<br />
         <Carousel style={borderStyles} slidesToShow={5} cellAlign="center" slidesToScroll={5}>
          {this.props.searchResults.map((result, index) => {
            return <SearchResult key={index} result={result}/>
          })}
         </Carousel>
       </div>
    );
  }
}

export default Search;