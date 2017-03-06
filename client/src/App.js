import React, { Component, Children, cloneElement } from 'react';
import Header from './Header.js'
import 'whatwg-fetch'
import request from 'superagent';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const CLOUDINARY_UPLOAD_PRESET = 'hmxzziag';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/lighthouse-cdr/upload'

const initialState = {
  currentUser: {email: '', user_id: ''},
  registration: {email: '', password: '', passwordConfirmation: ''},
  login: {email: '', password: ''},
  userAuthenticated: false,
  uploadedFile: null,
  uploadedProfileImage: null,
  uploadedFileCloudinaryUrl: '',
  photos: [],
  searchResults: [],
  userProfile: {},
  userAlbums: [],
  myProfile: {},
  myAlbums: [],
  userParam: '',
  albumParam: '',
  myAlbumParam: '',
  myInfo: {profilePicture: '', firstName: '', lastName: '', handle: '', location: '', description: '', years_exp: ''},
  showModal: false,
  currentModal: "",
  myProfilePhotos: [],
  alert: '',
  notification: {},
  photoToEdit: '',
}

let mainBody = {
  position: "relative",
  bottom: "15px"
}

let alertStyle = {
  position: "fixed",
  padding: "0px 25px",
  height: "64px",
  top: "87%",
  right: "3%",
  background: "green",
  "text-align": "center",
  "vertical-align": "middle",
  "line-height": "64px",
  "font-weight": "bold",
  "border-radius": "15px",
  color: "white"
}


class App extends Component {
  constructor(props) {
   super(props);
   this.state = initialState;
  }

  handleRegistrationChange = (e) => {
    let newRegistrationData = Object.assign({}, this.state.registration);
    if (e.target.name === 'email') {
      newRegistrationData.email = e.target.value;
    } else if (e.target.name === 'password') {
      newRegistrationData.password = e.target.value;
    } else {
      newRegistrationData.passwordConfirmation = e.target.value;
    }

    this.setState({registration: newRegistrationData})
  }

  onLogoutClick = (e) => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    localStorage.removeItem("user_id");
    this.setState({userAuthenticated: false, currentUser: initialState.currentUser})
    location.reload();
  }

  onRegistrationSubmit = (regInfo) => {
    fetch('http://localhost:8080/users/register', {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        token: localStorage.token,
        email: regInfo.email,
        password: regInfo.password,
        password_confirmation: regInfo.passwordConfirmation
      })
    })
    .then((response) => {
      var that = this;
      var contentType = response.headers.get("content-type");
      if(contentType && contentType.indexOf("application/json") !== -1) {
        return response.json().then(function(json) {
          if (response.status !== 200) {
            console.log(json.message); //if error occured
          }
          else {
            console.log(json.message);
            console.log(json.token);
            console.log(json.email);
            if (json.token) {
              let newCurrentUser = {user_id: json.user_id, email: json.email}
              localStorage.token = json.token;
              localStorage.email = json.email;
              localStorage.user_id = json.user_id;
              that.setState({userAuthenticated: true, registration: initialState.registration, currentUser: newCurrentUser});
              that.getMyProfile(localStorage.user_id);
              that.getMyAlbums(localStorage.user_id);
              return "render homepage";
            }
          }
        });
      } else {
        console.log("Oops, we haven't got JSON!");
      }
    })
    .catch( (error) => {  //network error only
      console.error(error);
    });
  }

  handleLoginChange = (e) => {
    let newLoginData = Object.assign({}, this.state.login);
    if (e.target.name === 'email') {
      newLoginData.email = e.target.value;
    } else {
      newLoginData.password = e.target.value
    }

    this.setState({login: newLoginData})
  }

  onLoginSubmit = (loginInfo) => {
    fetch('http://localhost:8080/users/login', {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        token: localStorage.token,
        email: loginInfo.email,
        password: loginInfo.password
      })
    })
    .then( (response) => {
      var that = this;
      var contentType = response.headers.get("content-type");
      if(contentType && contentType.indexOf("application/json") !== -1) {
        return response.json().then(function(json) {
          if (response.status !== 200) {
            console.log(json.message); //if error occured
          } else {
            console.log(json.message);
            console.log(json.token);
            console.log(json.email);
            if (json.token) {
              let newCurrentUser = {user_id: json.user_id, email: json.email}
              localStorage.token = json.token;
              localStorage.email = json.email;
              localStorage.user_id = json.user_id;
              that.setState({userAuthenticated: true, registration: initialState.registration, currentUser: newCurrentUser});
              that.getMyProfile(localStorage.user_id);
              that.getMyAlbums(localStorage.user_id);
            }
          }
        })
      }
    })
    .catch( (error) => {
        console.error(error);
    });
  }

  handlePhotoUpload = (file) => {
    this.setState({uploadedFile: file})
  }

  handleProfileImageUpload = (file) => {
    this.setState({uploadedProfileImage: file})
  }

  handleImageUpload = (file, url, type) => {
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
                        .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                        .field('file', file);
    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }
      if (response.body.secure_url !== '') {
        console.log(this);
        console.log(response.body.secure_url);

        if (type === 'profile_image') {
          let newProfileImage = Object.assign({}, this.state.myProfile);
          newProfileImage.profile_picture = response.body.secure_url;
          this.setState({myProfile: newProfileImage});
        } else {
          this.setState({
            uploadedFileCloudinaryUrl: response.body.secure_url
          });
        }
        //fetch to create item in database
        fetch(url, {
          method: 'POST',
          credentials: 'same-origin',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            token: localStorage.token,
            file_location: response.body.secure_url
          })
        })
        .then((response) => {
          let that = this;
          var contentType = response.headers.get("content-type");
          if(contentType && contentType.indexOf("application/json") !== -1) {
            return response.json().then( function(json) {
              if (response.status !== 200) {
                that.setState({alert : json.message});
                setTimeout(function() {
                  that.setState({alert: ''});
                }, 3000);
              }
              else {
                that.setState({alert : json.message});
                setTimeout(function() {
                  that.setState({alert: ''});
                }, 3000);
              }
            })
          }
        })
        .catch( (error) => {
          console.error(error);
        });
      }
    });
  }

  deletePhoto = (photo_id, token) => {
    let myProfilePhotos = this.state.myProfilePhotos;
    fetch(`http://localhost:8080/photos/delete`, {
      method: 'POST',
      credentails: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        photo_id: photo_id,
        token: token
      })
    })
    .then((response) => {
      var that = this;
      var contentType = response.headers.get("content-type");
      if(contentType && contentType.indexOf("application/json") !== -1) {
        return response.json().then(function(json) {
          if (response.status !== 200) {
            that.setState({alert : json.message});
            setTimeout(function() {
              that.setState({alert: ''});
            }, 3000);
          } else {

            for (let i = 0; i < myProfilePhotos.length; i++) {

              if(myProfilePhotos[i].photo_id === photo_id) {
                myProfilePhotos.splice(i, 1);
                break;
              }
            }
            that.setState({myProfilePhotos: myProfilePhotos});

            that.setState({alert : json.message});
            setTimeout(function() {
              that.setState({alert: ''});
            }, 3000);
          }
        })
      }
    })
    .catch((error) => {
      console.error(error);
    });
  }


  onFeaturePhotos = () => {
    fetch('http://localhost:8080/photos/featured', {
      method: 'GET',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      var that = this;
      var contentType = response.headers.get("content-type");
      if(contentType && contentType.indexOf("application/json") !== -1) {
        return response.json().then(function(json) {
          if (response.status !== 200) {
            console.log(json.message); //if error occured
          } else {
            that.setState({photos: json});
          }
        })
      }
    })
    .catch((error) => {
      console.error(error);
    });
  }

  sampleProfiles = () => {
    fetch('http://localhost:8080/users/sample', {
      method: 'GET',
      credentails: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      var that = this;
      var contentType = response.headers.get("content-type");
      if(contentType && contentType.indexOf("application/json") !== -1) {
        return response.json().then(function(json) {
          if (response.status !== 200) {
            console.log(json.message); //if error occured
          } else {
            that.setState({searchResults: json});
          }
        })
      }
    })
    .catch((error) => {
      console.error(error);
    });
  }

  getUserProfile = (userId) => {
    fetch(`http://localhost:8080/users/${userId}`, {
      method: 'GET',
      credentails: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      var that = this;
      var contentType = response.headers.get("content-type");
      if(contentType && contentType.indexOf("application/json") !== -1) {
        return response.json().then(function(json) {
          if (response.status !== 200) {
            console.log(json.message); //if error occured
          } else {
            that.setState({userProfile: json[0],
                          userParam: userId,
                         });
          }
        })
      }
    })
    .catch((error) => {
      console.error(error);
    });
  }

  getMyProfile = (userId) => {
    fetch(`http://localhost:8080/users/${userId}`, {
      method: 'GET',
      credentails: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      var that = this;
      var contentType = response.headers.get("content-type");
      if(contentType && contentType.indexOf("application/json") !== -1) {
        return response.json().then(function(json) {
          if (response.status !== 200) {
            console.log(json.message); //if error occured
          } else {
            that.setState({myProfile: json[0]});
          }
        })
      }
    })
    .catch((error) => {
      console.error(error);
    });
  }

  createMyAlbum = (userId, name, description) => {
    console.log(name);
    console.log(description);

    //TODO: check auth

    fetch(`http://localhost:8080/albums/new`, {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        token: localStorage.token,
        name: name,
        description: description
      })
    })
    .then((response) => {
      var that = this;
      var contentType = response.headers.get("content-type");
      if(contentType && contentType.indexOf("application/json") !== -1) {
        return response.json().then(function(json) {
          if (response.status !== 200) {
            that.setState({alert : json.message});
            setTimeout(function() {
              that.setState({alert: ''});
            }, 3000);
          } else {
            let myAlbums = that.state.myAlbums;
            myAlbums.push(json.content[0]);
            that.setState({myAlbums: myAlbums});
            that.setState({alert : json.message});
            setTimeout(function() {
              that.setState({alert: ''});
            }, 3000);

          }
        })
      }
    })
    .catch((error) => {
      console.error(error);

    });
  }

  getMyAlbums = (userId) => {
    fetch(`http://localhost:8080/albums/user/${userId}`, {
      method: 'GET',
      credentails: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      var that = this;
      var contentType = response.headers.get("content-type");
      if(contentType && contentType.indexOf("application/json") !== -1) {
        return response.json().then(function(json) {
          if (response.status !== 200) {
            console.log(json.message); //if error occured
          } else {
            that.setState({myAlbums: json});
          }
        })
      }
    })
    .catch((error) => {
      console.error(error);
    });
  }

  getUserPhotos = (userId) => {
    fetch(`http://localhost:8080/photos/user/${userId}`, {
      method: 'GET',
      credentails: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      var that = this;
      var contentType = response.headers.get("content-type");
      if(contentType && contentType.indexOf("application/json") !== -1) {
        return response.json().then(function(json) {
          if (response.status !== 200) {
            console.log(json.message); //if error occured
          } else {
            that.setState({photos: json});
          }
        })
      }
    })
    .catch((error) => {
      console.error(error);
    });
  }

  getAlbumPhotos = (userId, albumId) => {
    fetch(`http://localhost:8080/photos/user/${userId}/album/${albumId}`, {
      method: 'GET',
      credentails: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      var that = this;
      var contentType = response.headers.get("content-type");
      if(contentType && contentType.indexOf("application/json") !== -1) {
        return response.json().then(function(json) {
          if (response.status !== 200) {
            console.log(json.message); //if error occured
          } else {
            that.setState({photos: json,
                          albumParam: albumId});
            console.log(that.state);
          }
        })
      }
    })
    .catch((error) => {
      console.error(error);
    });
  }

  getMyProfileAlbumPhotos = (userId, albumId) => {
    fetch(`http://localhost:8080/photos/user/${userId}/album/${albumId}`, {
      method: 'GET',
      credentails: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      var that = this;
      var contentType = response.headers.get("content-type");
      if(contentType && contentType.indexOf("application/json") !== -1) {
        return response.json().then(function(json) {
          if (response.status !== 200) {
            console.log(json.message); //if error occured
          } else {
            that.setState({myProfilePhotos: json,
                          myAlbumParam: albumId});
          }
        })
      }
    })
    .catch((error) => {
      console.error(error);
    });
  }

  getUserAlbums = (userId) => {
    fetch(`http://localhost:8080/albums/user/${userId}`, {
      method: 'GET',
      credentails: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      var that = this;
      var contentType = response.headers.get("content-type");
      if(contentType && contentType.indexOf("application/json") !== -1) {
        return response.json().then(function(json) {
          if (response.status !== 200) {
            console.log(json.message); //if error occured
          } else {
            that.setState({userAlbums: json});
          }
        })
      }
    })
    .catch((error) => {
      console.error(error);
    });
  }

  getAlbumById = (albumId) => {
    fetch(`http://localhost:8080/albums/${albumId}`, {
      method: 'GET',
      credentails: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      var that = this;
      var contentType = response.headers.get("content-type");
      if(contentType && contentType.indexOf("application/json") !== -1) {
        return response.json().then(function(json) {
          if (response.status !== 200) {
            console.log(json.message); //if error occured
          } else {
            console.log("JSON:-->", json[0].user_id);
            that.getUserProfile(json[0].user_id);
          }
        })
      }
    })
    .catch((error) => {
      console.error(error);
    });
  }

  handleInfoChange = (e) => {
    let newInfo = Object.assign({}, this.state.myProfile);
    newInfo.email = this.state.currentUser.email;

    if (e.target.name === 'first_name') {
      newInfo.first_name = e.target.value;
    } else if (e.target.name === 'last_name') {
      newInfo.last_name = e.target.value;
    } else if (e.target.name === 'handle') {
      newInfo.handle = e.target.value;
    } else if (e.target.name === 'location_string') {
      newInfo.location_string = e.target.value;
    } else if (e.target.name === 'summary') {
      newInfo.summary = e.target.value;
    } else {
      newInfo.years_exp = e.target.value
    }

    // this.setState({myInfo: newInfo})
    this.setState({myProfile: newInfo})
    // console.log('INFO CHANGE SETTING THE STATE: ', this.state.myProfile);
  }

  onInfoSubmit = (myInfo) => {
    fetch('http://localhost:8080/users/update', {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        token: localStorage.token,
        first_name: myInfo.first_name,
        last_name: myInfo.last_name,
        handle: myInfo.handle,
        location_string: myInfo.location_string,
        description: myInfo.summary,
        years_exp: parseInt(myInfo.years_exp, 10)
      })
    })
    .then((response) => {
      let that=this;
      var contentType = response.headers.get("content-type");
      if(contentType && contentType.indexOf("application/json") !== -1) {
        return response.json().then(function(json) {
          if (response.status !== 200) {
            console.log(json.message); //if error occured
          } else {
            console.log('JSON RETURN FROM SERVER:');
            console.log(json.message);
            that.setState({alert : json.message});
            setTimeout(function() {
              that.setState({alert: ''});
            }, 3000);
          }
        })
      }
    })
  }

  handleOpenModal(album_id) {
    return function (e) {
      this.getAlbumById(album_id)
      this.setState({showModal: true});
      this.setState({currentModal: e.target.src})
    }.bind(this)
  }

  handleCloseModal() {
    this.setState({showModal: false});
    this.setState({currentModal: initialState.currentModal})
  }

  handleShowAlbum(album) {
    let that = this;
    return function (e) {
      console.log("album: ", album);
      that.getMyProfileAlbumPhotos(album.user_id, album.album_id);
    }
  }

  resetAlbumParam() {
    this.setState({albumParam: ''});
  }

  resetUserParam() {
    this.setState({userParam: ''});
  }

  componentDidMount() {
    if (localStorage.token) {
      let newCurrentUser = {user_id: localStorage.user_id, email: localStorage.email}
      this.setState({userAuthenticated: true, currentUser: newCurrentUser});
    }
    if (this.props.params.user_id) {
      this.setState({userParam: this.props.params.user_id});
    }

    if (this.props.params.album_id) {
      this.setState({albumParam: this.props.params.album_id});
    }

    if (localStorage.user_id) {
      this.getMyProfile(localStorage.user_id);
      this.getMyAlbums(localStorage.user_id);
    }
  }

  componentWillUpdate(nextProps, nextState) {
    if (this.props.params.user_id && this.props.params.user_id !== this.state.userParam) {
      this.getUserProfile(this.props.params.user_id);
      this.getUserAlbums(this.props.params.user_id);
      this.getUserPhotos(this.props.params.user_id);
    }

    if (this.props.params.album_id && this.props.params.album_id !== this.state.albumParam) {
      this.getAlbumPhotos(this.props.params.user_id, this.props.params.album_id);
    }
  }

  render() {
    console.log("APP STATE ON RENDER: ", this.state);
    return (
      <MuiThemeProvider>
        <div>
          <Header userA={this.state.userAuthenticated} onLogoutClick={this.onLogoutClick} sampleProfiles={this.sampleProfiles} searchResults={this.state.searchResults} resetAlbumParam={this.resetAlbumParam.bind(this)}/>
          <div className="mainBody" style={mainBody}>
          {Children.map(this.props.children, child =>
            cloneElement(child, {
              ...this.props,
              ...this.state,
              onRegistrationSubmit: this.onRegistrationSubmit,
              onLoginSubmit: this.onLoginSubmit,
              handleRegistrationChange: this.handleRegistrationChange,
              handleLoginChange: this.handleLoginChange,
              handlePhotoUpload: this.handlePhotoUpload.bind(this),
              handleProfileImageUpload: this.handleProfileImageUpload.bind(this),
              handleImageUpload: this.handleImageUpload.bind(this),
              onFeaturePhotos: this.onFeaturePhotos.bind(this),
              getUserProfile: this.getUserProfile.bind(this),
              getMyProfile: this.getMyProfile.bind(this),
              getUserPhotos: this.getUserPhotos.bind(this),
              createMyAlbum: this.createMyAlbum.bind(this),
              getMyAlbums: this.getMyAlbums.bind(this),
              handleInfoChange: this.handleInfoChange.bind(this),
              onInfoSubmit: this.onInfoSubmit.bind(this),
              handleOpenModal: this.handleOpenModal.bind(this),
              handleCloseModal: this.handleCloseModal.bind(this),
              handleShowAlbum: this.handleShowAlbum.bind(this),
              deletePhoto: this.deletePhoto.bind(this),
              resetUserParam: this.resetUserParam.bind(this)

            })
          )}
          </div>

          { this.state.alert !== '' ? <div style={alertStyle}> {this.state.alert} </div> : ''}
          

        </div>

      </MuiThemeProvider>
    );
  }
}

export default App;

//<div style={alertStyle}>Photo inserted into Album Blah</div>          