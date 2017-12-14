//Import libraries for making registerComponent
import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {

  constructor(props) {
    super(props);
    this.state = { albums: [] };
  }

  componentDidMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(
      response => this.setState({ albums: response.data })
    );
  }

  renderAlbums() {
    const list = this.state.albums.map(
      album => <AlbumDetail key={album.title} album={album} />
    );
    return list;
  }

  render() {
    console.log(this.state.albums);
    return (
      <View>
        {this.renderAlbums()}
      </View>
    );
  }
}

export default AlbumList;
