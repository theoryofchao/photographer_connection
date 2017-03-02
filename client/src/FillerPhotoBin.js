import React, { Component } from 'react';

const styles = {
  root: {
    display: 'flex',
    flexWrap: "wrap",
    justifyContent: 'space-between',
    backgroundColor: "lightgrey",
    padding: "70px"
  },
  gridList: {
    width: 200,
    height: 200,
    border: "solid 2px grey",
    padding: "2px"
  },
};

function popUp() {
  alert("test")
 }


class FillerPhotoBin extends Component {
  componentWillMount() {
    this.props.onFeaturePhotos();
  }

  render() {
    return (
      <div style={styles.root}>
        {this.props.photos.map((photo, index) => (
          <img key={index} onClick={popUp} style={styles.gridList} src={photo.file_location} role="presentation"/>
      ))}
  </div>
    );
  }
}

export default FillerPhotoBin;