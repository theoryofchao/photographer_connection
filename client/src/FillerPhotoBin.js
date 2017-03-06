import React, { Component } from 'react';
import Modal from 'react-modal';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardHeader } from 'material-ui/Card';
import { Link } from 'react-router';

var coverImage = {
  heading: {
    display: "flex",
    justifyContent: "center",
    border: "solid 3px black",
    fontSize: "2em"
  },
  images: {
    photo: "http://glowparties.ca/wp-content/uploads/2015/05/photographer1.jpg",
    photo2: "http://vinamy.com/wp-content/uploads/2014/05/photography-masterclass-book-review.jpg",
    photo3: "https://d1zpvjny0s6omk.cloudfront.net/media/fileupload/2015/09/17/drew%20clayton.jpg"
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

var box = {
  backgroundColor: "#000",
  width: "80%"
}

class FillerPhotoBin extends Component {
  componentWillMount() {
    this.props.onFeaturePhotos();
  }
  render() {
    let full_name = `${this.props.userProfile.first_name} ${this.props.userProfile.last_name}`;
    let profile_link = "/user-profile/" + this.props.userProfile.user_id;
      if (!this.props.userAuthenticated) {
        return (
          <div>
            <div style={{border: "solid 1px black"}}>
            <div>
              <div style={coverImage.box.outer}>
                <span style={coverImage.heading}>Why Focus?</span>
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
            </div>

            <span style={coverImage.heading}>Focus On Your Career</span>
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
        <Modal
          isOpen={this.props.showModal}
          contentLabel="Modal"
          style={modalStyles}
          >
          <Card>
            <Link to={profile_link} onClick={this.props.handleCloseModal}>
              <CardHeader
                title={full_name}
                subtitle={this.props.userProfile.location_string}
                avatar={this.props.userProfile.profile_picture}
                style={{backgroundColor: "#ddd"}}
              />
              </Link>
              <RaisedButton style={{display: "block"}} backgroundColor={"#e06464"} onClick={this.props.handleCloseModal} label="Close" fullWidth={true} />
                <img src={this.props.currentModal} role="presentation" />
            </Card>
          </Modal>
          <div style={styles.root}>
            {this.props.photos.map((photo, i) => (
              <img key={i} onClick={this.props.handleOpenModal(photo.album_id)} style={styles.gridList} src={photo.file_location} role="presentation"/>
            ))}
            </div>
          </div>
      )} else {
        return (
          <div>
            <Modal
            isOpen={this.props.showModal}
            contentLabel="Modal"
            style={modalStyles}
            >
            <Card>
              <Link to={profile_link} onClick={this.props.handleCloseModal}>
                <CardHeader
                  title={full_name}
                  subtitle={this.props.userProfile.location_string}
                  avatar={this.props.userProfile.profile_picture}
                  style={{backgroundColor: "#ddd"}}
                />
                </Link>
                <RaisedButton style={{display: "block"}} backgroundColor={"#e06464"} onClick={this.props.handleCloseModal} label="Close" fullWidth={true} />
                  <img src={this.props.currentModal} role="presentation" />
              </Card>
            </Modal>
            <div style={styles.root}>
              {this.props.photos.map((photo, i) => (
                <img key={i} onClick={this.props.handleOpenModal(photo.album_id)} style={styles.gridList} src={photo.file_location} role="presentation"/>
              ))}
            </div>
          </div>
        )}
      }
    }

export default FillerPhotoBin;