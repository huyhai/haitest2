import React, { Component } from 'react';
import { AppRegistry,
StyleSheet,
ListView,
Text,
View } from 'react-native';
var data = [{id:1, prop:'inactive'}, {id:2, prop:'inactive'}]
export default class ListViewSimpleExample extends Component {
        getInitialState: function() {
        	var DS = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
          return {
            data: data,
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
        return <Text style={{padding:10, borderColor: '#dddddd', borderWidth:1}}>{item.id + ' = ' + item.prop}</Text>
      },

      handlePress: function(item){
        var dataclone = this.state.data;
        for (var i=0; i<dataclone.length; i++) {
          if (dataclone[i] == item) {
            dataclone[i].prop = 'active'
            console.log('item became active')
            console.log(dataclone)
          }
        }
        this.setState({
        	data: dataclone,
        })
      },

      render: function() {
        console.log("STATE:", this.state);
        return <View style={{marginTop:30}}>
          	<ListView
          dataSource={this.state.DS}
          renderRow={this.renderRow}/>
          </View>
      }
}

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
