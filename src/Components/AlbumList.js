//Import libraries for making registerComponent
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumList';

class AlbumList extends Component {

  constructor(props) {
    super(props);
    this.state = { albums: [] };
  }

  componentDidMount() {
    console.log('componentDidMount in AlbumList');
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response => response.json())
        .then(data => this.setState({ albums: data }));
    /*
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(
      response => this.setState({ albums: response.data })
    );*/
  }

  renderAlbums() {
    const list = this.state.albums.map(
      album => <AlbumDetail key={album.title} album={album} />
      //album => <Text key={album.title}>{album.title}</Text>
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
