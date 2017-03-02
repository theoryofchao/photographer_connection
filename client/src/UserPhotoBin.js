import React, { Component } from 'react';
var Carousel = require('nuka-carousel');

var parent = {
  textAlign: "center"
};

var gridList = {
    display: "inline-block",
    maxWidth: "40%",
    maxHeight: "1%",
    border: "solid 3px black"
};

class UserPhotoBin extends Component {
  mixins: [Carousel.ControllerMixin]
  render() {

    return (
      <div style={{ height: '500px' }}>
        <h1> My Photos </h1>
        <Carousel style={parent}>
        {this.props.photos.map((photo) => (
            <img style={gridList} src={photo.file_location} role="presentation"/>
        ))}
        </Carousel>
    </div>
    );
  }
}

export default UserPhotoBin;