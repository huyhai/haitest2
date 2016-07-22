/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
StyleSheet,
  View,
  Image,StatusBar
} from 'react-native';
import styles from '../libs/myStyle.js';
import TimerMixin from 'react-timer-mixin';
import ChoosenLocation from '../ui/location.js'
import ListViewSimpleExample from '../ui/ListViewExample.js'
import lgexam from '../ui/SampleApp.js'
//md5 = require('js-md5');
import mainscreen from '../ui/main.js'

class Splash extends Component {

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
 componentDidMount() {
   setTimeout(
     () => { this.choosenLocation()},
     1000
   );
 }

  render() {
    return (

      <View>

       <Image
       style={styles.logo}
        source={require('../img/splash.png')}
       />
     </View>
    );
  }


}


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

export default Splash;
