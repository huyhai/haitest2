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
  Image,Alert,PixelRatio,StatusBar
} from 'react-native';

import {getDefauldParams} from '../libs/MyUtil.js'
import {showIOSAlert} from '../libs/MyUtil.js'
GLOBAL = require('../libs/globals.js');
import Drawer from 'react-native-drawer'
import Main from '../ui/MainContent.js'
 import ControlPanel from '../ui/ControlPanel.js'
 const drawerStyles = {
   drawer: { shadowColor: '#ffffff', shadowOpacity: 0.8, shadowRadius: 3},
   main: {paddingLeft: 3},
 }

class MainApp extends Component {
  state={
    drawerOpen: false,
    drawerDisabled: false,
  };
  closeDrawer = () => {
    this._drawer.close()
  };
  openDrawer = () => {
    this._drawer.open()
  };

  constructor(props) {
   super(props);
  }


  render() {
    return (

      <View style={styles.bg_all}>

      <Drawer
          ref={(ref) => this._drawer = ref}
         type="overlay"
          content={
            <ControlPanel closeDrawer={this.closeDrawer} />
          }
          acceptDoubleTap
          styles={drawerStyles}
          onOpen={() => {
            console.log('onopen')
            this.setState({drawerOpen: true})
          }}
          onClose={() => {
            console.log('onclose')
            this.setState({drawerOpen: false})
          }}
          captureGestures={true}
          tweenDuration={100}
          panThreshold={0.08}
          disabled={this.state.drawerDisabled}
          openDrawerOffset={(viewport) => {
            return 100
          }}
          panOpenMask={0.03}
          negotiatePan
          >
          <Main />
        </Drawer>



      </View>
  )}

  componentDidMount(){
  //  this.getBlockHome();
  }
  getBlockHome() {
    var formBody=getDefauldParams('product.getList');
    var APIinfo = {
      'stateId': '437',
      'offset': '0',
      'limit': '3',
      'categoryId': '557'
    }
    for (var property in APIinfo) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(APIinfo[property]);
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
      console.log(responseData);
      Alert.alert(
        "POST",
        "Response Body -> " + responseData.message
      )
    }).catch((error) => {
      console.error(error);
    }).done();
  }
}
var styles = StyleSheet.create({
  container: {
  padding: 20,
  flex: 1,
  },
  bg_all: {
    // backgroundColor:'black',
    flex: 1
  },
  bg_header: {
    flexDirection:"row",
    backgroundColor:"red",
   //justifyContent: 'center',
    flex:1,
    padding:10
  },
  bg_lv: {
    flex:11,
    justifyContent: 'center',
  },
  ic_header:{
    width: PixelRatio.getPixelSizeForLayoutSize(10),
    height: PixelRatio.getPixelSizeForLayoutSize(12),
  },
  ic_search_new:{
    width: PixelRatio.getPixelSizeForLayoutSize(10),
    height: PixelRatio.getPixelSizeForLayoutSize(12),
    marginRight: PixelRatio.getPixelSizeForLayoutSize(4)
  },
  ic_logo:{
    width: PixelRatio.getPixelSizeForLayoutSize(50),
    height: PixelRatio.getPixelSizeForLayoutSize(12),
  },
  bg_toogle:{
    flex:1,
    justifyContent: 'center',
    // backgroundColor: 'yellow',
  },
  bg_cart1:{
    flex:1,
    // backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection:"row",
  },
  bg_logo:{
    flex:1,
    // backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center'
  },

});


export default MainApp;
