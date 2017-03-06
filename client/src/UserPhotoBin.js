import React, { Component } from 'react';
var Carousel = require('nuka-carousel');

var parent = {
  textAlign: "center",
  height: "300px"
};

var gridList = {
    objectFit: "contain",
    maxHeight: "400px",
};

class UserPhotoBin extends Component {
  mixins: [Carousel.ControllerMixin]
  render() {

    return (
      <div className="albumSlider" style={{ height: '500px' }}>
        <h1> My Photos </h1>
        <Carousel style={parent}>
        {this.props.photos.map((photo, index) => (
            <img key={index} style={gridList} src={photo.file_location} role="presentation"/>
        ))}
        </Carousel>
    </div>
    );
  }
}

export default UserPhotoBin;