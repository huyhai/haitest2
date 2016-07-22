/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
} from 'react-native';

//import Button from 'react-native-button';

//import styles from './css/common.js';
import Splash from './ui/splash.js';

class haitest extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{name: 'Splash', component: Splash}}
        configureScene={() => {

          return Navigator.SceneConfigs.FloatFromRight;
        }}
        renderScene={(route, navigator) => {
          if (route.component) {
            return React.createElement(route.component, { navigator });
          }
        }}
      />
    );
  }
}

AppRegistry.registerComponent('haitest2', () => haitest);
