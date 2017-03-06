import React, { Component } from 'react';

var coverImage = {
  heading: {
    display: "flex",
    justifyContent: "center",
    borderBottom: "solid 5px black",
    borderTop: "solid 5px black"
  },
  images: {
    photo: "http://glowparties.ca/wp-content/uploads/2015/05/photographer1.jpg",
    photo2: "http://vinamy.com/wp-content/uploads/2014/05/photography-masterclass-book-review.jpg",
    photo3: "http://www.stockvault.net/blog/wp-content/uploads/2013/06/Happy-1.jpg"
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


class Intro extends Component {
  render() {
    return (
    <div>
      <div style={coverImage.box.outer}>
        <div style={coverImage.box.inner}>
        <h1 style={coverImage.heading}>Why Focus?</h1>
        <img style={coverImage.styles} src={coverImage.images.photo3} role="presentation" />
          <ul style={coverImage.box.list}>
            <li style={{padding: "50px 100px"}}><i className="fa fa-list fa-5x" aria-hidden="true" style={{padding: "0 0 20px 11px"}}></i><br /> Browse Artists</li>
            <li style={{padding: "50px 100px"}}><i className="fa fa-map-marker fa-5x" aria-hidden="true" style={{padding: "0 0 20px 30px"}}></i><br />Support Local</li>
            <li style={{padding: "50px 100px"}}><i className="fa fa-comments fa-5x" aria-hidden="true" style={{padding: "0 0 20px 18px"}}></i><br />Live Messaging</li>
            <li style={{padding: "50px 100px"}}><i className="fa fa-address-book-o fa-5x" aria-hidden="true" style={{padding: "0 0 20px 25px"}}></i><br />Book Your Shoot</li>
          </ul>
        </div>
    </div>

        <h1 style={coverImage.heading}>Focus On Your Career</h1>
        <img style={coverImage.styles} src={coverImage.images.photo2} role="presentation" />
        <div style={coverImage.box.inner}>
          <ul style={coverImage.box.list}>
            <li style={{padding: "50px 100px"}}><i className="fa fa-calendar-check-o fa-5x" aria-hidden="true" style={{padding: "0 0 20px 28px"}}></i><br /> Set Your Schedule</li>
            <li style={{padding: "50px 100px"}}><i className="fa fa-globe fa-5x" aria-hidden="true" style={{padding: "0 0 20px 33px"}}></i><br />Work In Any City</li>
            <li style={{padding: "50px 100px"}}><i className="fa fa-bullhorn fa-5x" aria-hidden="true" style={{padding: "0 0 20px 55px"}}></i><br />Showcase Your Portfolio</li>
            <li style={{padding: "50px 100px"}}><i className="fa fa-line-chart fa-5x" aria-hidden="true" style={{padding: "0 0 20px 14px"}}></i><br />Gain Experience</li>
          </ul>

       </div>

        <div style={coverImage.space}>
        </div>
    </div>
    );
  }
}


export default Intro;