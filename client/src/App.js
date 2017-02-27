import React, { Component, Children, cloneElement } from 'react';
import Header from './Header.js'
import 'whatwg-fetch'
import request from 'superagent';

const CLOUDINARY_UPLOAD_PRESET = 'hmxzziag';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/lighthouse-cdr/upload'

const initialState = {
  currentUser: {},
  registration: {email: '', password: '', passwordConfirmation: ''},
  login: {email: '', password: ''},
  uploadedFile: null,
  uploadedFileCloudinaryUrl: ''
}

class App extends Component {
  constructor(props) {
   super(props);
   this.state = initialState;
  }





  handleRegistrationChange = (e) => {
    console.log('handleRegistrationChange', e, e.target.name);
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

      var contentType = response.headers.get("content-type");
      if(contentType && contentType.indexOf("application/json") !== -1) {
        return response.json().then(function(json) {
          if (response.status !== 200) {
            console.log(json.message); //if error occured
          }
          else {
            console.log(json.message);
            console.log(json.token);
            if (json.token) {
              localStorage.token = json.token;
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

  handlePhotoUpload = (file) => {
    this.setState({uploadedFile: file})
  }

  handleImageUpload(file) {
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
                        .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                        .field('file', file);
    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }
      if (response.body.secure_url !== '') {
        console.log(this);
        this.setState({
          uploadedFileCloudinaryUrl: response.body.secure_url
        });
      }
    });
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
  .then((response) => {

    var contentType = response.headers.get("content-type");
    if(contentType && contentType.indexOf("application/json") !== -1) {
      return response.json().then( (json) => {
        if (response.status !== 200) {
          console.log(json.message); //if error occured
        }
        else {
          console.log(json.message);
          if (json.token) {
            console.log('test');
            localStorage.token = json.token;
          }
        }
      })

    }
  })
  .catch( (error) => {
    console.error(error);
  });
}

  render() {
    return (
      <div>
        <Header />
        <br />
        {Children.map(this.props.children, child =>
          cloneElement(child, {
            ...this.props,
            ...this.state,
            onRegistrationSubmit: this.onRegistrationSubmit,
            onLoginSubmit: this.onLoginSubmit,
            handleRegistrationChange: this.handleRegistrationChange,
            handlePhotoUpload: this.handlePhotoUpload.bind(this),
            handleImageUpload: this.handleImageUpload.bind(this)
            })
        )}
      </div>
    );
  }
}

export default App;
