import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/Components/Header';
import AlbumList from './src/Components/AlbumList';

const App = () => (
  <View>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);

AppRegistry.registerComponent('albums', () => App);
