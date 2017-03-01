import React, { Component } from 'react';

import { Link } from 'react-router';

var styles = {
  border: "solid 1px black",
  padding: "10px",
  overflow: "auto"
}

class SearchResult extends Component {

    render() {
    let profileLink = "/user-profile/" + this.props.result.user_id;
    return (
        <div style={styles}>
          <Link to={profileLink}>{this.props.result.email}</Link>
        </div>
    );
  }
}

export default SearchResult;

