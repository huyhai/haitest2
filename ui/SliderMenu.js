

import React, { Component } from 'react';
import {
  AppRegistry,
StyleSheet,
  View,
  Image,StatusBar
} from 'react-native';

//md5 = require('js-md5');


class Slider extends Component {

  constructor(props) {
   super(props);
 }
 choosenLocation() {
//  console.log('fdfdfdfdf');
   this.props.navigator.push({
     name: 'ChoosenLocation',
     component: mainscreen
   });
 }


  render() {
    return (

      <View style={styles.container}>


     </View>
    );
  }


}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default Slider;
