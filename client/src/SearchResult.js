import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router';

var styles = {
  border: "solid 1px #7EBF2D",
  padding: "10px",
  overflow: "auto",
  backgroundColor: "#0D141A"
}

var info = {
  display: "inline-block",
  textDecoration: "none",
  float: "right",
  fontSize: "0.8em",
  margin: "0",
  color: "#7EBF2D"
}

var floaty = {
  float: "left",
  display: "inline-block"
}

var button = {
  display: "inline-block",
  position: "absolute",
  right: "11px",
  bottom: "11px",
  color: "#0D141A"
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
            <FlatButton backgroundColor={"#7EBF2D"} hoverColor={"#009924"} onClick={this.props.resetAlbumParam} style={button} label="Profile" />
          </Link>
        </div>
      </div>
    );
  }
}

export default SearchResult;

