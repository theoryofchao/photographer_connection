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
    margin: 0
  },
  images: {
    photo: "http://glowparties.ca/wp-content/uploads/2015/05/photographer1.jpg",
    photo2: "http://vinamy.com/wp-content/uploads/2014/05/photography-masterclass-book-review.jpg",
    photo3: "https://d1zpvjny0s6omk.cloudfront.net/media/fileupload/2015/09/17/drew%20clayton.jpg"
  },
  styles: {
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    maxHeight: "560px",
    width: "50%"
  },
  space: {
   padding: "25px 0",
   textAlign: "center"
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
    justifyContent: "center",
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
    padding: "2px",
    backgroundColor: "white"
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

var button = {
  width: "50%"
}

class FillerPhotoBin extends Component {
  componentWillMount() {
    this.props.onFeaturePhotos();
  }
  render() {
    let full_name = `${this.props.userProfile.first_name} ${this.props.userProfile.last_name}`;
    let profile_link = "/user-profile/" + this.props.userProfile.user_id;
      if (!this.props.userAuthenticated) {
        if (!this.props.userInfo) {
          return (
            <div>
            <h1 style={coverImage.heading}> Why Focus? </h1>
              <div style={{border: "solid 1px black"}}>
              <div>
                <div style={coverImage.box.outer}>
                  <div>
                  <RaisedButton style={button} onClick={this.props.toggleUserInfoFalse}>I am looking for a photographer!</RaisedButton>
                  <RaisedButton style={button} onClick={this.props.toggleUserInfoTrue}>I am a photographer looking to work!</RaisedButton>
                  </div>
                  <div style={coverImage.box.inner}>
                      <ul style={coverImage.box.list}>
                        <li style={coverImage.space}><i className="fa fa-list fa-3x" aria-hidden="true" style={{paddingBottom: "20px"}} ></i><br /><span>Browse Artists</span></li>
                        <li style={coverImage.space}><i className="fa fa-map-marker fa-3x" aria-hidden="true" style={{paddingBottom: "20px"}} ></i><br /><span>Support Local</span></li>
                        <li style={coverImage.space}><i className="fa fa-comments fa-3x" aria-hidden="true" style={{paddingBottom: "20px"}} ></i><br /><span>Live Messaging</span></li>
                        <li style={coverImage.space}><i className="fa fa-address-book-o fa-3x" aria-hidden="true" style={{paddingBottom: "20px"}} ></i><br /><span>Book Your Shoot</span></li>
                      </ul>
                      <img style={coverImage.styles} src={coverImage.images.photo3} role="presentation" />
                  </div>
                </div>
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
                  <h1 style={coverImage.heading}> Why Focus? </h1>
                    <RaisedButton style={button} onClick={this.props.toggleUserInfoFalse}>I am looking for a photographer!</RaisedButton>
                    <RaisedButton style={button} onClick={this.props.toggleUserInfoTrue}>I am a photographer looking to work!</RaisedButton>
                    <div style={coverImage.box.inner}>
                    <img style={coverImage.styles} src={coverImage.images.photo2} role="presentation" />
                    <ul style={coverImage.box.list}>
                      <li style={coverImage.space}><i className="fa fa-calendar-check-o fa-3x" aria-hidden="true" style={{paddingBottom: "20px"}}></i><br /> Set Your Schedule</li>
                      <li style={coverImage.space}><i className="fa fa-globe fa-3x" aria-hidden="true" style={{paddingBottom: "20px"}}></i><br />Work In Any City</li>
                      <li style={coverImage.space}><i className="fa fa-bullhorn fa-3x" aria-hidden="true" style={{paddingBottom: "20px"}}></i><br />Showcase A Portfolio</li>
                      <li style={coverImage.space}><i className="fa fa-line-chart fa-3x" aria-hidden="true" style={{paddingBottom: "20px"}}></i><br />Gain Experience</li>
                      </ul>
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
                )}
              } else {
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