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
  currentUser: {firstName: '', lastName: '', email: ''},
  registration: {email: '', password: '', passwordConfirmation: ''},
  login: {email: '', password: ''},
  userAuthenticated: false,
  uploadedFile: null,
  uploadedFileCloudinaryUrl: '',
  photos: [],
  searchResults: [],
  userProfile: {},
  param: ''
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
    this.setState({userAuthenticated: false, currentUser: initialState.currentUser})
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
              let newCurrentUser = {firstName: '', lastName: '', email: json.email}
              localStorage.token = json.token;
              localStorage.email = json.email;
              that.setState({userAuthenticated: true, registration: initialState.registration, currentUser: newCurrentUser});
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
              let newCurrentUser = {firstName: '', lastName: '', email: json.email}
              localStorage.token = json.token;
              localStorage.email = json.email;
              that.setState({userAuthenticated: true, registration: initialState.registration, currentUser: newCurrentUser});
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


  handleImageUpload = (file) => {
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

        this.setState({
          uploadedFileCloudinaryUrl: response.body.secure_url
        });
        //fetch to create item in database
        fetch('http://localhost:8080/photos/new', {
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
          var contentType = response.headers.get("content-type");
          if(contentType && contentType.indexOf("application/json") !== -1) {
            return response.json().then( function(json) {
              if (response.status !== 200) {
                console.log(json.message); //if error occured
              }
              else {
                console.log(json.message);

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
            that.setState({userProfile: json[0], param: userId});
            console.log(that.state);
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
            console.log(that.state);
          }
        })
      }
    })
    .catch((error) => {
      console.error(error);
    });
  }

  componentDidMount() {
    if (localStorage.token) {
      let newCurrentUser = {firstName: '', lastName: '', email: localStorage.email}
      this.setState({userAuthenticated: true, currentUser: newCurrentUser});
    }
    if (this.props.params.id) {
      this.setState({param: this.props.params.id})
    }
    console.log(this.props.params);
  }

  componentWillUpdate(nextProps, nextState) {
    if (this.props.params.id && this.props.params.id !== this.state.param) {
      this.getUserProfile(this.props.params.id);
      this.getUserPhotos(this.props.params.id);
    }
  }

  render() {
    return (

<MuiThemeProvider>
      <div>
        <Header userA={this.state.userAuthenticated} onLogoutClick={this.onLogoutClick} sampleProfiles={this.sampleProfiles} searchResults={this.state.searchResults}/>
        <br />
        {Children.map(this.props.children, child =>
          cloneElement(child, {
            ...this.props,
            ...this.state,
            onRegistrationSubmit: this.onRegistrationSubmit,
            onLoginSubmit: this.onLoginSubmit,
            handleRegistrationChange: this.handleRegistrationChange,
            handleLoginChange: this.handleLoginChange,
            handlePhotoUpload: this.handlePhotoUpload.bind(this),
            handleImageUpload: this.handleImageUpload.bind(this),
            onFeaturePhotos: this.onFeaturePhotos.bind(this),
            getUserProfile: this.getUserProfile.bind(this),
            getUserPhotos: this.getUserPhotos.bind(this)
          })
        )}
      </div>
      </MuiThemeProvider>

    );
  }
}

export default App;