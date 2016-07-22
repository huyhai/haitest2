import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    container: {
        flex: 1
    },
    "subview": {
        "backgroundColor": require('../img/textbox_location.png'),
        "width": 80 * vw,
        "marginTop": 0,
        "marginRight": 10 * vw,
        "marginBottom": 0,
        "marginLeft": 10 * vw
    },
    logo: {
        width: 100 * vw,
        height: 100 * vh
    },
    logochoosen: {
        //backgroundColor: require('../img/textbox_location.png'),,
        //width: 100 * vw,
        // height: 50 * vh,
        paddingTop: 20,
        // paddingLeft: 20,
        // paddingRight: 20,
        alignItems: 'center'
      //  marginTop: 10
        // marginRight: 10 * vw,
        // marginBottom: 0,
        // marginLeft: 10 * vw
    },
    logochoosen1: {
        //backgroundColor: require('../img/textbox_location.png'),,
        //width: 100 * vw,
        // height: 50 * vh,
      //  paddingTop: 20,
        // paddingLeft: 20,
        // paddingRight: 20,
        width: 80 * vw,
        height: 40 * vh,
        alignItems: 'center'
      //  marginTop: 10
        // marginRight: 10 * vw,
        // marginBottom: 0,
        // marginLeft: 10 * vw
    },
    logochoosenimg: {
      // width: 100,
      // height: 40
        width: 80 * vw,
        height: 40 * vh
        // paddingTop: 20,
        // paddingLeft: 20,
        // paddingRight: 20
        // alignItems: 'center'
      //  marginTop: 10
        //marginRight: 10 * vw,
        // marginBottom: 0,
        //marginLeft: 10 * vw
    },
    "input_username": {
        "width": 80 * vw,
        "marginTop": 10,
        "marginRight": 10 * vw,
        "marginBottom": 0,
        "marginLeft": 10 * vw,
        "height": 40,
        "paddingTop": 0,
        "paddingRight": 15,
        "paddingBottom": 0,
        "paddingLeft": 15,
        "borderColor": "#ccc",
        "borderWidth": 1,
        "borderRadius": 4
    },
    "button_login": {
        "backgroundColor": "#f00",
        "width": 80 * vw,
        "marginTop": 10,
        "marginRight": 10 * vw,
        "marginBottom": 0,
        "marginLeft": 10 * vw,
        "paddingTop": 8,
        "paddingRight": 8,
        "paddingBottom": 8,
        "paddingLeft": 8,
        "textAlign": "center",
        "color": "#fff"
    },
    choosen_location_bg: {
        backgroundColor: "#f00",
        "width": 80 * vw,
        "marginTop": 10,
        "marginRight": 10 * vw,
        "marginBottom": 0,
        "marginLeft": 10 * vw,
        "paddingTop": 8,
        "paddingRight": 8,
        "paddingBottom": 8,
        "paddingLeft": 8,
        "textAlign": "center",
        "color": "#fff"
    },
    splash_tv_khuvuc: {
        textAlign: 'center',
        fontSize: 15,
        marginTop: 10 * vh,
    },
    bg_choosen_location: {
        textAlign: 'center',
        fontSize: 15,
        marginTop: 10 * vh,

    },
    list: {
        flex: 1,
        padding: 30,
        //backgroundColor: 'rgb(39, 174, 96)'
    },
    row: {
        margin: 8,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 20,
        color: 'black'
    },
    bg_all: {
      flex: 1
    },
    bg_header: {
      flexDirection:"row",
      backgroundColor:"red",
      justifyContent: 'space-between',
      flex:1,
      padding:10
    },
    bg_lv: {
      flex:11,
      // width: 100 * vw,
      // height: 100 * vh,
      // backgroundColor:"green",
      justifyContent: 'center',
    },
    ic_header:{
      width: PixelRatio.getPixelSizeForLayoutSize(10),
      height: PixelRatio.getPixelSizeForLayoutSize(12),
    },
    ic_logo:{
      width: PixelRatio.getPixelSizeForLayoutSize(50),
      height: PixelRatio.getPixelSizeForLayoutSize(12),
    },
    bg_toogle:{

      justifyContent: 'center',
      alignItems: 'center'
    },
    bg_cart:{
      flexDirection:"row",
      justifyContent: 'center',
      alignItems: 'center'
    },
    textSmallWhite:{
      color:'white',
      fontSize:PixelRatio.getPixelSizeForLayoutSize(4),
    },
    textSmallDark:{
      color:'#7c7c7c',
      fontSize:PixelRatio.getPixelSizeForLayoutSize(4),
    },
    textMediumWhite:{
      color:'white',
      fontSize:PixelRatio.getPixelSizeForLayoutSize(6),
    },
    textMediumDark:{
      color:'#7c7c7c',
      fontSize:PixelRatio.getPixelSizeForLayoutSize(6),
    },



});
