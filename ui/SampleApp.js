
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableOpacity
} from 'react-native';

//var data = [{id:1, prop:'inactive'}, {id:2, prop:'inactive'}]
var DATA =[
  {name:"Hồ chí minh", id:'437'},
  {name:"Hà nội", id:'440'},
  {name:"Tỉnh thành khác", id:'0'}
]
import mainscreen from '../ui/main.js'

var SampleApp = React.createClass({

  getInitialState: function() {
  	var DS = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      data: DATA,
      DS: DS.cloneWithRows([])};
  },
  componentDidMount: function() {
  	this.setState({
    	DS: this.state.DS.cloneWithRows(this.state.data)
    })
  },

renderRow: function(item) {
  console.log("ITEM: ", item)
  return <TouchableOpacity onPress={() => this.handlePress(item)}>
    {this.renderButton(item)}
    </TouchableOpacity>
},

renderButton: function(item){
  return <Text style={{padding:10, borderColor: '#dddddd', borderWidth:1}}>{item.name}</Text>
},

handlePress: function(item){
console.log(item.name)
  var dataclone = this.state.data;
  for (var i=0; i<dataclone.length; i++) {
    if (dataclone[i] == item) {
      this.props.navigator.push({
        name: 'mainscreen',
        component: mainscreen
      });
          // console.log(dataclone[i].name)
      //dataclone[i].name = 'active'
      // console.log('item became active')
      // console.log(dataclone)
    }
  }
  // this.setState({
  // 	data: dataclone,
  // })
},

render: function() {
  console.log("STATE:", this.state);
  return <View style={{marginTop:30}}>
    	<ListView
    dataSource={this.state.DS}
    renderRow={this.renderRow}/>
    </View>
}
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 28,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    fontSize: 19,
    marginBottom: 5,
  },
});


module.exports = SampleApp;
