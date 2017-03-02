import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';
import FlatButton from 'material-ui/FlatButton';

import { Link } from 'react-router';

var styles = {
  border: "solid 1px black",
  padding: "10px",
  overflow: "auto",
}

var info = {
  display: "inline-block",
  textDecoration: "none",
  float: "right",
  color: "black",
  fontSize: "0.8em",
  margin: "0"
}

var floaty = {
  float: "left",
  display: "inline-block"
}

var button = {
  display: "inline-block",
  position: "absolute",
  right: "11px",
  bottom: "11px"
}

class SearchResult extends Component {

    render() {
    let profileLink = "/user-profile/" + this.props.result.user_id;
    return (
        <div style={styles}>

            <Avatar
            style={floaty}
            src={this.props.result.profile_picture}
            size={125}
            />
            <div>
              <p style={info}>{this.props.result.first_name}</p><br />
              <p style={info}>{this.props.result.last_name}</p><br /><br />
              <p style={info}>{this.props.result.location_string}</p><br />
              <Link to={profileLink}>
                <FlatButton backgroundColor={"#babbbc"}style={button} label="Profile" />
              </Link>
            </div>
        </div>
    );
  }
}

export default SearchResult;

