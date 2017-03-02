import React, { Component } from 'react';
var Carousel = require('nuka-carousel');

var parent = {
  textAlign: "center"
};

var gridList = {
    display: "inline-block",
    width: "400px",
    height: "400px",
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
        <div>something</div>
    </div>
    );
  }
}

export default UserPhotoBin;