import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';


var register = {
  border: "solid 2px red",
  width: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "25px",
  margin: "auto"
}

var heading = {
  borderBottom: "solid 3px black",
  width: "70%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "auto"
}

var button = {
  padding: "15px",
  backgroundColor: "black",
  color: "red",
  borderRadius: "25px",
  fontSize: "0.9em",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "auto"
}

var info = {
  display: "flex",
  flexDirection: "row",
  listStyleType: "none"
}

class Register extends Component {

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onRegistrationSubmit(this.props.registration);
    this.props.router.push("/");
  }

  render() {
    return (
    <div>
      <Paper zDepth={2} style={register}>
        <form onSubmit={this.onFormSubmit.bind(this)} >
          <h1 style={heading}> Register With Focus </h1>
            <TextField
              name="email"
              type="email"
              fullWidth={true}
              value={this.props.registration.email}
              hintText="Enter Your E-mail...."
              floatingLabelText="Your E-mail"
              onChange={this.props.handleRegistrationChange}
            />
            <TextField
              name="password"
              type="password"
              fullWidth={true}
              value={this.props.registration.password}
              hintText="Enter Your New Password"
              floatingLabelText="Enter A Password"
              onChange={this.props.handleRegistrationChange}
            />
            <TextField
              name="password-confirm"
              type="password"
              fullWidth={true}
              value={this.props.registration.passwordConfirmation}
              hintText="Confirm Your Password"
              floatingLabelText="Please Confirm Your Password"
              onChange={this.props.handleRegistrationChange}
              />
              <br />
              <br />
            <input style={button} type="submit" value="Submit" />
        </form>
      </Paper>


      <Card>

          <CardText>
            <ul style={info}>
              <li style={{padding: "0 100px"}}><i className="fa fa-calendar-check-o fa-5x" aria-hidden="true" style={{padding: "0 0 20px 28px"}}></i><br /> Set Your Schedule</li>
              <li style={{padding: "0 100px"}}><i className="fa fa-globe fa-5x" aria-hidden="true" style={{padding: "0 0 20px 33px"}}></i><br />Work In Any City</li>
              <li style={{padding: "0 100px"}}><i className="fa fa-bullhorn fa-5x" aria-hidden="true" style={{padding: "0 0 20px 55px"}}></i><br />Showcase Your Portfolio</li>
              <li style={{padding: "0 100px"}}><i className="fa fa-line-chart fa-5x" aria-hidden="true" style={{padding: "0 0 20px 14px"}}></i><br />Gain Experience</li>
            </ul>
          </CardText>
          <CardTitle title="Kick Your Career Into Overdrive" />
          <CardMedia
            overlay={<CardTitle title="John Johnson" subtitle="Toronto, Ontario" />}
          >
        <img style={{maxHeight: "700px"}}src="http://vinamy.com/wp-content/uploads/2014/05/photography-masterclass-book-review.jpg" />
        </CardMedia>
      </Card>

      <Card>
        <CardTitle title="Why Focus?" />
          <CardText>
            <ul style={info}>
              <li style={{padding: "0 100px"}}><i className="fa fa-list fa-5x" aria-hidden="true" style={{padding: "0 0 20px 11px"}}></i><br /> Browse Artists</li>
              <li style={{padding: "0 100px"}}><i className="fa fa-map-marker fa-5x" aria-hidden="true" style={{padding: "0 0 20px 30px"}}></i><br />Support Local</li>
              <li style={{padding: "0 100px"}}><i className="fa fa-comments fa-5x" aria-hidden="true" style={{padding: "0 0 20px 18px"}}></i><br />Live Messaging</li>
              <li style={{padding: "0 100px"}}><i className="fa fa-address-book-o fa-5x" aria-hidden="true" style={{padding: "0 0 20px 25px"}}></i><br />Book Your Shoot</li>
            </ul>
          </CardText>
          <CardMedia
            overlay={<CardTitle title="Alex & Mae" subtitle="Budapest, Hungary" />}
          >
        <img style={{maxHeight: "700px"}} src="http://www.stockvault.net/blog/wp-content/uploads/2013/06/Happy-1.jpg" />
        </CardMedia>
      </Card>


    </div>
    );
  }
}

export default Register;