  import React, { Component } from 'react';
// import Dropzone from 'react-dropzone';
import TextField from 'material-ui/TextField';
import MyAlbum from './MyAlbum.js';

var padding = {
  color: 'white',
  padding: "15px 30px",
  background: 'linear-gradient( 180deg, #1a2733, #2b4054 95%, #668fb2 )',
}

var form = {
  display: "inline-block",
  verticalAlign: "top",
  borderLeft: "solid 2px black",
  paddingLeft: "10px"
}

var formh3 = {
  color: 'white',
  marginBottom: "0",
  marginTop: "0"
}

var upload = {
  margin: "auto",
  width: "50%"
}

var hintStyle = {
  color: "#B1B1B1"
}

var floatingLabelStyle = {
  color: "#fff"
}

var floatingLabelFocusStyle = {
  color: "#00BCD4"
}

var formText = {
  color: "#7EBF2D"
}

var button = {
  padding: "8px",
  backgroundColor: "#0e2d49",
  color: "#7EBF2D",
  fontSize: "0.8em",
  margin: "0 auto",
  display: "block"
}


class MyGallery extends Component {
  constructor(props) {
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onImageDrop(files) {
    this.props.handlePhotoUpload(files[0]);
    this.props.handleImageUpload(files[0], 'http://localhost:8080/photos/new', 'gallery');
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.createMyAlbum(localStorage.user_id, this.nameInput.input.value, this.descriptionInput.input.value);
    this.nameInput.input.value = "";
    this.descriptionInput.input.value = "";
  }

  render() {
    return (
      <div style={padding}>
        <h2>Your Albums</h2>
        {this.props.myAlbums.map((album, index) => {
          return (
            <MyAlbum key={index} album={album}
              handlePhotoUpload={this.props.handlePhotoUpload}
              handleImageUpload={this.props.handleImageUpload}
              uploadedFileCloudinaryUrl={this.props.uploadedFileCloudinaryUrl}
              handleShowAlbum={this.props.handleShowAlbum}
            />)
        })}
        <div style={form} className="form">
          <h3 style={formh3}><u>Add Album</u></h3>
          <form onSubmit={this.onFormSubmit.bind(this)}>
            <TextField
              type="string"
              name="name"
              floatingLabelText="Album Name"
              hintText="Name your album"
              ref={(input) => this.nameInput = input}
              floatingLabelStyle={floatingLabelStyle}
              floatingLabelFocusStyle={floatingLabelFocusStyle}
              inputStyle={formText}
              hintStyle={hintStyle}
            /><br />
            <TextField
              type="string"
              name="description"
              floatingLabelText="Description"
              hintText="Enter a description"
              ref={(input) => this.descriptionInput = input}
              floatingLabelStyle={floatingLabelStyle}
              floatingLabelFocusStyle={floatingLabelFocusStyle}
              inputStyle={formText}
              hintStyle={hintStyle}
            /><br /><br />
            <input style={button} type="submit" value="Create Album" />
          </form>
        </div>
        <div>
          {this.props.uploadedFileCloudinaryUrl === '' ? null :
          <div style={upload}>
            <br />
            <h4>Your uploaded image:</h4>
            <img src={this.props.uploadedFileCloudinaryUrl} role="presentation" />
          </div>}
        </div>
        {this.props.myProfilePhotos.length === 0 ? null :
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
          {this.props.myProfilePhotos.map((photo, index) => {
        //    return <div><img key={index} src={photo.file_location} role="presentation" /><button onClick={() => {this.props.deletePhoto(photo.photo_id, localStorage.token)}}>Delete</button></div>
            return <div key={index}><img style={{border: "solid 2px black", padding: "1px", margin: "5px 2px 0", objectFit: "contain", maxHeight: "250px"}} src={photo.file_location} role="presentation" /><br /><button style={button} onClick={() => {this.props.deletePhoto(photo.photo_id, localStorage.token)}}>Delete</button></div>
          })}
        </div>
        }
      </div>
    );
  }
}

export default MyGallery;