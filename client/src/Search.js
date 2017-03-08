import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import SearchResult from './SearchResult.js'
var Carousel = require('nuka-carousel');


let searchBarStyle = {
  background: '#111a22',
  paddingTop: "65px",
}

var styles = {
  maxHeight: "211px",
  overflow: "hidden",
  background: 'linear-gradient( 180deg, #111a22, #1a2733 )'
}

var hintStyle = {
  color: "#B1B1B1"
}

var floatingLabelStyle = {
  color: "#fff"
}

var floatingLabelFocusStyle = {
  color: "#00BCD4"
}

var formText = {
  color: "#7EBF2D"
}


class Search extends Component {
  mixins: [Carousel.ControllerMixin]
  componentWillMount() {
    this.props.sampleProfiles();
  }

  render() {
    return (
        <div className="searchBar" style={searchBarStyle}>
          <TextField
            type="text"
            name="search"
            floatingLabelText="Search"
            hintText="Enter a Location"
            onChange={this.props.handleSearch}
            floatingLabelStyle={floatingLabelStyle}
            floatingLabelFocusStyle={floatingLabelFocusStyle}
            inputStyle={formText}
            hintStyle={hintStyle}
          />
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