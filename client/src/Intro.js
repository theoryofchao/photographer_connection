import React, { Component } from 'react';

var coverImage = {
  heading: {
    display: "flex",
    justifyContent: "center",
  },
  images: {
    photo: "http://glowparties.ca/wp-content/uploads/2015/05/photographer1.jpg",
    photo2: "http://vinamy.com/wp-content/uploads/2014/05/photography-masterclass-book-review.jpg",
    photo3: "http://www.stockvault.net/blog/wp-content/uploads/2013/06/Happy-1.jpg"
  },
  styles: {
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    maxHeight: "740px"
  },
  space: {
   padding: "25px 0"
  },
  box: {
    inner: {
      backgroundColor: "#fff",
      color: "#4e4e4f",
      display: "flex",
      flexDirection: "row",
    },
  outer: {
    position: "inline-block",
    width: "100%",
  },
  list: {
    display: "flex",
    flexDirection: "column",
    listStyleType: "none",
    justifyContent: "flex-end",
    margin: "0 auto",
    padding: 0,
  },
  }
}


class Intro extends Component {
  render() {
    return (
    <div>
      <div style={coverImage.box.outer}>
      <h1 style={coverImage.heading}>Why Focus?</h1>
        <div style={coverImage.box.inner}>
        <img style={coverImage.styles} src={coverImage.images.photo3} role="presentation" />
          <ul style={coverImage.box.list}>
            <li style={coverImage.space}><i className="fa fa-list fa-5x" aria-hidden="true" style={{padding: "0 0 20px 11px"}}></i><br /> Browse Artists</li>
            <li style={coverImage.space}><i className="fa fa-map-marker fa-5x" aria-hidden="true" style={{padding: "0 0 20px 30px"}}></i><br />Support Local</li>
            <li style={coverImage.space}><i className="fa fa-comments fa-5x" aria-hidden="true" style={{padding: "0 0 20px 18px"}}></i><br />Live Messaging</li>
            <li style={coverImage.space}><i className="fa fa-address-book-o fa-5x" aria-hidden="true" style={{padding: "0 0 20px 25px"}}></i><br />Book Your Shoot</li>
          </ul>
        </div>
    </div>


      <h1 style={coverImage.heading}>Focus On Your Career</h1>
        <div style={coverImage.box.inner}>
          <ul style={coverImage.box.list}>
            <li style={coverImage.space}><i className="fa fa-calendar-check-o fa-5x" aria-hidden="true" style={{padding: "0 0 20px 28px"}}></i><br /> Set Your Schedule</li>
            <li style={coverImage.space}><i className="fa fa-globe fa-5x" aria-hidden="true" style={{padding: "0 0 20px 33px"}}></i><br />Work In Any City</li>
            <li style={coverImage.space}><i className="fa fa-bullhorn fa-5x" aria-hidden="true" style={{padding: "0 0 35px 30px"}}></i><br />Showcase A Portfolio</li>
            <li style={coverImage.space}><i className="fa fa-line-chart fa-5x" aria-hidden="true" style={{padding: "0 0 20px 14px"}}></i><br />Gain Experience</li>
          </ul>
        <img style={coverImage.styles} src={coverImage.images.photo2} role="presentation" />
       </div>
    </div>
    );
  }
}


export default Intro;