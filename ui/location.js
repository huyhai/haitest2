
import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Image,Text,ListView  ,AlertIOS,TouchableHighlight
} from 'react-native';
import styles from '../libs/myStyle.js';
import immutable from 'immutable';
var cardDetails = {
  "api": 'info.get'
}
var formBody = [];
GLOBAL = require('../libs/globals.js');

var DATA =[
  {name:"Hồ chí minh", id:'437'},
  {name:"Hà nội", id:'440'},
  {name:"Tỉnh thành khác", id:'0'}
]


class ChoosenLocation extends Component {

  constructor(props) {
    super(props)
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1!=r2});
    this.state = {
      khuvuc: "CHỌN KHU VỰC CỦA BẠN",
      dataSource: ds.cloneWithRows(DATA)
    }
     this.callThisFunction = this.callThisFunction.bind(this)
  }

  componentDidMount() {
    this.getEvents();
  }

  getEvents() {
    console.log('getEvents');
    for (var property in cardDetails) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(cardDetails[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    return fetch(GLOBAL.BASE_URL, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: formBody
    }).then((response) => response.json())
    .then((responseData) => {
      GLOBAL.TIME_TAMP=JSON.stringify(responseData.data.timestamp);
      console.log(responseData);
      // AlertIOS.alert(
      //   "POST",
      //   "Response Body -> " + GLOBAL.TIME_TAMP
      // )
    }).catch((error) => {
      console.error(error);
    }).done();
  }

  pressRow(row) {
       console.log('JobsRootComponent - _pressRow ', row);
   }



  dkm(a){
    return(
        <TouchableHighlight onPress={() => {
       this.pressRow(rowID);
       highlightRow(sectionID, rowID);
        }}>
          <View>
            <Text style={{padding:20}}>{a.name}</Text>
          </View>
        </TouchableHighlight>
    );
  }


  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.splash_tv_khuvuc}>
          {this.state.khuvuc}
        </Text>

        <View style={styles.logochoosen}>
          <Image resizeMode='contain' style={styles.logochoosen1} source={require('../img/textbox_location.png')}>
          <ListView style={styles.list}
            dataSource={this.state.dataSource}
            renderRow={this.dkm}/>
          </Image>
        <Image resizeMode='contain' style={styles.logochoosenimg} source={require('../img/img_location.png')}/>
        </View>
      </View>
    );
  }
}
export default ChoosenLocation;
