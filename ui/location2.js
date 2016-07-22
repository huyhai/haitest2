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
  Image,ListView,Text
} from 'react-native';
import styles from '../libs/myStyle.js';
import TimerMixin from 'react-timer-mixin';
import ChoosenLocation from '../ui/location.js'
import ListViewSimpleExample from '../ui/ListViewExample.js'
import lgexam from '../ui/SampleApp.js'

export default class Location2 extends Component {


  getInitialState: function() {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
      ])
    };
  }
  render:function() {
    return (
      <View style={{paddingTop: 22}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
        />
      </View>
    );
  }
  renderRow: function(item) {
    console.log("ITEM: ", item)
    return <TouchableOpacity onPress={() => this.handlePress(item)}>
      {this.renderButton(item)}
      </TouchableOpacity>
  }
  renderButton: function(item){
    return <Text style={{padding:10, borderColor: '#dddddd', borderWidth:1}}>{item}</Text>
  }
  handlePress: function(item){
    console.log('item.name')


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
