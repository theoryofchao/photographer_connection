import React, { Component } from 'react';
import Modal from 'react-modal';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardHeader } from 'material-ui/Card';

import { Link } from 'react-router';

var styles = {
  root: {
    display: 'flex',
    flexWrap: "wrap",
    justifyContent: 'center',
    backgroundColor: "lightgrey",
    padding: "40px 10px"
  },
  gridList: {
    maxHeight: "250px",
    objectFit: "contain",
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
    flexDirection: "column",
    boxShadow: "5px 5px 5px #888",
  }
}

var button = {
  display: "block",
}

var modalImage = {
}

class FillerPhotoBin extends Component {
  componentWillMount() {
    this.props.onFeaturePhotos();
  }
  render() {
    let full_name = `${this.props.userProfile.first_name} ${this.props.userProfile.last_name}`;
    let profile_link = "/user-profile/" + this.props.userProfile.user_id;
    return (
      <div>
        <Modal
        isOpen={this.props.showModal}
        contentLabel="Modal"
        style={modalStyles}
        >
            <Card style={modalImage}>
              <Link to={profile_link} onClick={this.props.handleCloseModal}>
                <CardHeader
                  title={full_name}
                  subtitle={this.props.userProfile.location_string}
                  avatar={this.props.userProfile.profile_picture}
                  style={{backgroundColor: "#ddd"}}
                />
              </Link>
              <RaisedButton style={button} backgroundColor={"#e06464"} onClick={this.props.handleCloseModal} label="Close" fullWidth={true} />
                <img src={this.props.currentModal} role="presentation" />
            </Card>
        </Modal>
        <div style={styles.root}>
          {this.props.photos.map((photo, i) => (
            <img key={i} onClick={this.props.handleOpenModal(photo.album_id)} style={styles.gridList} src={photo.file_location} role="presentation"/>
          ))}
        </div>
      </div>
    );
  }
}

export default FillerPhotoBin;