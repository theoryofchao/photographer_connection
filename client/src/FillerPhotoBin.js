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

const tilesData = [
  {
    img: 'http://i.imgur.com/nemjxlN.jpg',
    title: 'Breakfast',
    author: 'jill111',
  },
  {
    img: 'http://i.imgur.com/2f0XvJC.jpg',
    title: 'Tasty burger',
    author: 'pashminu',
  },
  {
    img: 'http://i.imgur.com/2f0XvJC.jpg',
    title: 'Camera',
    author: 'Danson67',
  },
  {
    img: 'http://i.imgur.com/syAAYDe.jpg',
    title: 'Morning',
    author: 'fancycrave1',
  },
  {
    img: 'http://i.imgur.com/syAAYDe.jpg',
    title: 'Hats',
    author: 'Hans',
  },
  {
    img: 'http://i.imgur.com/syAAYDe.jpg',
    title: 'Honey',
    author: 'fancycravel',
  },
  {
    img: 'http://i.imgur.com/syAAYDe.jpg.jpg',
    title: 'Vegetables',
    author: 'jill111',
  },
  {
    img: 'http://i.imgur.com/syAAYDe.jpg',
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
  },
];


class FillerPhotoBin extends Component {
  render() {
    return (
        <div style={styles.root}>
    <GridList
      cellHeight={180}
      style={styles.gridList}
    >
      <Subheader>December</Subheader>
      {tilesData.map((tile, i) => (
        <GridTile
          key={i}
          title={tile.title}
          subtitle={<span>by <b>{tile.author}</b></span>}
          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
        >
          <img src={tile.img} role="presentation"/>
        </GridTile>
      ))}
    </GridList>
  </div>
    );
  }
}

export default FillerPhotoBin;