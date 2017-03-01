import React, { Component } from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';


const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
};

class UserPhotoBin extends Component {

  render() {

    return (
      <div style={styles.root}>
        <GridList
          cellHeight={180}
          style={styles.gridList}
        >
        <Subheader>Our Photos</Subheader>
        {this.props.photos.map((photo, i) => (
          <GridTile
            key={i}
            actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
          >
            <img src={photo.file_location} role="presentation"/>
          </GridTile>
        ))}
      </GridList>
    </div>
    );
  }
}

export default UserPhotoBin;