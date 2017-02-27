import React, { Component } from 'react';

var borderStyles = {
  border: "solid 1px black",
  padding: "10px"
}

class MyInfo extends Component {
  render() {
    return (
        <div style={borderStyles}>
          Edit Info
        </div>
    );
  }
}

export default MyInfo;