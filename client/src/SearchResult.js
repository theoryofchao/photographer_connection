import React, { Component } from 'react';

import { Link } from 'react-router';

var styles = {
  border: "solid 1px black",
  padding: "10px 10px 15px 10px",
  overflow: "auto"
}

var img = {
  height: "115px"
}

class SearchResult extends Component {

    render() {
    let profileLink = "/user-profile/" + this.props.result.user_id;
    return (
        <div style={styles}>
          <p>{this.props.result.first_name} {this.props.result.last_name}</p>
          <img style={img} src={this.props.result.profile_picture} role="presentation"/>
          <p>{this.props.result.location_string}</p>
          <p>$$$$ Icon?</p>
          <Link to={profileLink}>{this.props.result.email}</Link>
        </div>
    );
  }
}

export default SearchResult;

