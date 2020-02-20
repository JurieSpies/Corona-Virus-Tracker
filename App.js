//Packages
import React, { Component } from 'react';
import SplashScreen from 'react-native-splash-screen';

//pages
import Navigator from './src/Router/Router';

export default class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return <Navigator />;
  }
}
