/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component ,PropTypes} from 'react';
import {
  AppRegistry,
StyleSheet,
  View,
  Image,Alert,PixelRatio,StatusBar,TouchableOpacity,ListView,Text,TouchableHighlight

} from 'react-native';

import {getDefauldParams} from '../libs/MyUtil.js'
import {showIOSAlert} from '../libs/MyUtil.js'
GLOBAL = require('../libs/globals.js');
console.disableYellowBox = true;
import StarRating from '../libs/StarRating.js'
import myStyle from '../libs/myStyle.js';
import {formatMoney} from '../libs/MyUtil.js'

class MainContent extends Component {

  getBlockHome() {
    var formBody=getDefauldParams('product.getList');
    var APIinfo = {
      'stateId': '437',
      'offset': '0',
      'limit': '20',
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
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(responseData.data.listProduct),
        loaded: true,
      });

      // Alert.alert(
      //   "POST",
      //   "Response Body -> " + responseData.data.listProduct
      // )

    }).catch((error) => {
      console.error(error);
    }).done();
  }

  static contextTypes = {
    drawer: PropTypes.object.isRequired,
  };

  constructor(props) {
   super(props);
   var ds = new ListView.DataSource({
         rowHasChanged: (row1, row2) => row1 !== row2,
     });
     this.state = {
         dataSource: ds.cloneWithRows([]),
          starCount: 3.5
     };

  }

  _renderRow(data, sectionID, rowID) {
      return (
        <TouchableOpacity onPress={() => this._handlePress(data)}>
          {this._renderButton(data)}
          <View style={styles.line}>
          </View>
         </TouchableOpacity>
      );
  }

  _handlePress(item){
    console.log(item.name)
  }

  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }
  _renderButton(item){
    return (
      <View style={styles.row}>
        <View style={styles.rowleft}>
          <Image  source={{uri: item.image}}
            style={{flex:1}} />
        </View>
        <View style={styles.rowright}>
            <Text numberOfLines={2} style={styles.textMediumBlackNormal}>
            {item.name}
            </Text>
            <View style={styles.rowstar}>
              <StarRating
                maxStars={5}
                rating={item.rateVal}
                disabled={true}
                starSize={PixelRatio.getPixelSizeForLayoutSize(10)}
                onStarChange={(value) => this.onStarRatingPress(value)}/>
              <Text numberOfLines={1} style={styles.textMediumBlackRate}>
                {'('+item.rateTotal+')'}
              </Text>
            </View>

            <View style={styles.rowstar}>
              <Image
                resizeMode='contain'
                style={styles.tag}
                source={require('../img/icon_tag.png')}>
                <Text numberOfLines={1} style={myStyle.textSmallWhite}>
                  {item.discountValue+'%'}
                </Text>
              </Image>
              <Text numberOfLines={1} style={styles.textMediumRed}>
                {(item.price).formatMoney(0, ',', '.')}
              </Text>
              <Text numberOfLines={1} style={styles.textMediumBlack}>
                {(item.listPrice).formatMoney(0, ',', '.')}
              </Text>
            </View>
            <View style={styles.rowstar}>
              <Image
                resizeMode='contain'
                style={styles.nguoimua}
                source={require('../img/ic_nguoimua.png')}>
              </Image>
              <Text numberOfLines={1} style={styles.textMediumBlackNguoimua}>
                {(item.nowNumber).formatMoney(0, ',', '.')}
              </Text>
            </View>


        </View>

      </View>

    );
  }

  _renderHeader() {
      return (
        <Text>This is some text. This is some text. This is some text. This is some text.</Text>
      );
  }

  render() {
    return (

      <View style={styles.bg_all}>

        <View style={styles.bg_header}>
          <View style={styles.bg_toogle}>
            <TouchableOpacity onPress={this.context.drawer.open}>
              <Image resizeMode='contain' style={styles.ic_header} source={require('../img/toggle.png')}/>
            </TouchableOpacity>
          </View>
          <View style={styles.bg_logo}>
              <Image resizeMode='contain' style={styles.ic_logo} source={require('../img/logo_hotdealvn2.png')}/>
          </View>
          <View style={styles.bg_cart1}>
              <Image resizeMode='contain' style={styles.ic_search_new} source={require('../img/ic_search_new.png')}/>
              <Image resizeMode='contain' style={styles.ic_header} source={require('../img/ic_cart_new.png')}/>
          </View>

        </View>
        <View style={styles.bg_lv}>
          <ListView
              style={styles.list}
              dataSource={this.state.dataSource}
              renderRow={this._renderRow.bind(this)}
              // renderHeader={this._renderHeader.bind(this)}
              />
        </View>
      </View>
  )}

  componentDidMount(){
   this.getBlockHome();
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
    backgroundColor: 'white',
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
  list: {
      flex: 1,
      backgroundColor:'transparent',


  },
  row: {
      flex:1,
      padding: PixelRatio.getPixelSizeForLayoutSize(5),
      flexDirection: 'row'

  },
  rowleft: {
      flex:1,
  },
  rowright: {
      flex:2,
      marginLeft: PixelRatio.getPixelSizeForLayoutSize(7),
      flexDirection: 'column'

  },
  title: {
      fontSize: 20,
      color: 'white'
  },
  line: {
    borderWidth:0.2,
    borderColor:'black',
    // backgroundColor: 'black',
  },
  rowstar: {
    flexDirection:"row",
    alignItems:"center"
  },
  tag: {
    width: PixelRatio.getPixelSizeForLayoutSize(11),
    height: PixelRatio.getPixelSizeForLayoutSize(12),
    alignItems:"center",
    justifyContent:"center"
  },
  nguoimua:{
    width: PixelRatio.getPixelSizeForLayoutSize(9),
    height: PixelRatio.getPixelSizeForLayoutSize(9),
  },
  textMediumRed:{
    color:'red',
    fontSize:PixelRatio.getPixelSizeForLayoutSize(GLOBAL.TEXTSIZEMEDIUM),

    marginLeft:PixelRatio.getPixelSizeForLayoutSize(5),
  },
  textMediumBlack:{
    color:'#7c7c7c',
    fontSize:PixelRatio.getPixelSizeForLayoutSize(GLOBAL.TEXTSIZESMALL_MEDIUM),

    marginLeft:PixelRatio.getPixelSizeForLayoutSize(5),
    textDecorationLine: 'line-through'
  },
  textMediumBlackNguoimua:{
    color:'#7c7c7c',
    fontSize:PixelRatio.getPixelSizeForLayoutSize(GLOBAL.TEXTSIZESMALL_MEDIUM),

    marginLeft:PixelRatio.getPixelSizeForLayoutSize(5),

  },
  textMediumBlackRate:{
    color:'#7c7c7c',
    fontSize:PixelRatio.getPixelSizeForLayoutSize(GLOBAL.TEXTSIZESMALL_MEDIUM),
    marginLeft:PixelRatio.getPixelSizeForLayoutSize(5),

  },
  textMediumBlackNormal:{
    color:'#7c7c7c',
    fontSize:PixelRatio.getPixelSizeForLayoutSize(GLOBAL.TEXTSIZEMEDIUM),

  }

});

export default MainContent;
