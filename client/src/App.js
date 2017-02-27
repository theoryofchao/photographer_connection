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
    console.log('RegInfo: ', regInfo);
    fetch('http://localhost:8080/users/register', {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: regInfo.email,
        password: regInfo.password,
        password_confirmation: regInfo.passwordConfirmation
      })
    })
    .then((response) => {
      console.log(response);
    })
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
