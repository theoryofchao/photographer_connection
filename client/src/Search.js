import React, { Component } from 'react';
import SearchResult from './SearchResult.js'
var Carousel = require('nuka-carousel');
import RaisedButton from 'material-ui/RaisedButton';

var styles = {
  maxHeight: "211px",
}

var coverImage = {
  heading: {
    display: "flex",
    justifyContent: "center",

  },
  images: {
    photo: "http://glowparties.ca/wp-content/uploads/2015/05/photographer1.jpg",
    photo2: "http://vinamy.com/wp-content/uploads/2014/05/photography-masterclass-book-review.jpg",
  },
  styles: {
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    maxHeight: "1000px"
  },
  space: {
    height: "50px"
  },
  box: {
    inner: {
      zIndex: "1",
      backgroundColor: "#fff",
      color: "#4e4e4f",
    },
  outer: {
    position: "inline-block",
    width: "100%",
    padding: "50px 0"
  },
  list: {
    display: "flex",
    flexDirection: "row",
    listStyleType: "none"
  },

  }
}

class Search extends Component {
  mixins: [Carousel.ControllerMixin]
  componentWillMount() {
    this.props.sampleProfiles();
  }

  render() {
    return (
      <div style={coverImage.box.outer}>
        <h1 style={coverImage.heading}>Why Focus?</h1>
          <div style={coverImage.box.inner}>
            <ul style={coverImage.box.list}>
              <li style={{padding: "50px 100px"}}><i className="fa fa-calendar-check-o fa-5x" aria-hidden="true" style={{padding: "0 0 20px 22px"}}></i><br /> Set Your Schedule</li>
              <li style={{padding: "50px 100px"}}><i className="fa fa-map-marker fa-5x" aria-hidden="true" style={{padding: "0 0 20px 33px"}}></i><br />Work In Any City</li>
              <li style={{padding: "50px 100px"}}><i className="fa fa-bullhorn fa-5x" aria-hidden="true" style={{padding: "0 0 20px 55px"}}></i><br />Showcase Your Portfolio</li>
              <li style={{padding: "50px 100px"}}><i className="fa fa-line-chart fa-5x" aria-hidden="true" style={{padding: "0 0 20px 14px"}}></i><br />Gain Experience</li>
            </ul>
            <RaisedButton label="Learn More" />
        </div>
        <img style={coverImage.styles} src={coverImage.images.photo2} role="presentation" />
        <div style={coverImage.space}>

        </div>
        <div>
         <Carousel style={styles} slidesToShow={5} cellAlign="center" slidesToScroll={3}>
          {this.props.searchResults.map((result, index) => {
            return <SearchResult key={index} result={result}/>
          })}
         </Carousel>
       </div>
      </div>
    );
  }
}

export default Search;