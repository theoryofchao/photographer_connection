import React, { Component } from 'react';

var borderStyles = {
  border: "solid 1px black",
  padding: "10px"
}

var size = {
  height: "350px",
  width: "350px",
  padding: "25px",
  border: "solid 4px yellow"
}

class FillerPhoto extends Component {
  render() {
    return (
      <div style={borderStyles}>
        <img style={size} src={this.props.photo.file_location} alt="1"/>
      </div>
    );
  }
}

export default FillerPhoto;