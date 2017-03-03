import React, { Component } from 'react';
import Modal from 'react-modal';
import RaisedButton from 'material-ui/RaisedButton';

var styles = {
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

var modalStyles = {
  overlay: {
    padding: "50px 100px",
  },
  content: {
    backgroundColor: "(255, 255, 255, 0.75)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  }
}

var button = {
  display: "block",
}

var modalImage = {
  boxShadow: "2px"
}

class FillerPhotoBin extends Component {
  componentWillMount() {
    this.props.onFeaturePhotos();
  }
  render() {
    return (
      <div>
        <Modal
        isOpen={this.props.showModal}
        contentLabel="Modal"
        style={modalStyles}
        >
            <img style={modalImage} src={this.props.currentModal} role="presentation" />
            <RaisedButton style={button} onClick={this.props.handleCloseModal} label="Close" fullWidth={true} />
        </Modal>
        <div style={styles.root}>
          {this.props.photos.map((photo, i) => (
            <img key={i} onClick={this.props.handleOpenModal} style={styles.gridList} src={photo.file_location} role="presentation"/>
          ))}
        </div>
      </div>
    );
  }
}

export default FillerPhotoBin;