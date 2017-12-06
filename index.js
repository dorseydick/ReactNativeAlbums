import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/Components/header';

const App = () => (
<Header />
);

AppRegistry.registerComponent('albums', () => App);
