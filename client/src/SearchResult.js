import React, { Component } from 'react';

import { Link } from 'react-router';

var image = {
  borderRadius: "50%",
  height: "100px"
}

var styles = {
  border: "solid 1px black",
  padding: "10px 10px 150px 10px",
  overflow: "auto"
}

class SearchResult extends Component {

    render() {
    let profileLink = "/user-profile/" + this.props.result.user_id;
    return (
        <div style={styles}>
            <p>{this.props.result.first_name} {this.props.result.last_name}</p>
            <p>{this.props.result.location_string}</p>
            <img style={image} src={this.props.result.profile_picture} role="presentation"/>
            <p>$$$$ Icon?</p>
                      <Link to={profileLink}><p>{this.props.result.email}</p>
          </Link>
        </div>
    );
  }
}

export default SearchResult;

