'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,Dimensions
} from 'react-native';

const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

class Login1 extends Component {
  constructor() {
      super()
      this.state = {
        username: '',
        password: ''
      }
  }

  render() {
    return (
      <View style={styles.container}>
          <Image style={styles.bg} />
          <View style={styles.header}>
              <Image style={styles.mark} source={require('../img/img_location.png')}/>
          </View>
          <View style={styles.inputs}>
              <View style={styles.inputContainer}>
                  <Image style={styles.inputUsername} source={require('../img/img_location.png')}/>
                  <TextInput
                      style={[styles.input, styles.whiteFont]}
                      placeholder="Username"
                      placeholderTextColor="#FFF"
                      value={this.state.username}
                  />
              </View>
              <View style={styles.inputContainer}>
                  <Image style={styles.inputPassword} source={require('../img/img_location.png')}/>
                  <TextInput
                      password={true}
                      style={[styles.input, styles.whiteFont]}
                      placeholder="Pasword"
                      placeholderTextColor="#FFF"
                      value={this.state.password}
                  />
              </View>
              <View style={styles.forgotContainer}>
                  <Text style={styles.greyFont}>Forgot Password</Text>
              </View>
          </View>
          <View style={styles.signin}>
              <Text style={styles.whiteFont}>Sign In</Text>
          </View>
          <View style={styles.signup}>
              <Text style={styles.greyFont}>Dont have an account?<Text style={styles.whiteFont}>  Sign Up</Text></Text>
          </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      flex: 1,
      backgroundColor: 'transparent'
    },
    bg: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: width,
        height: height,
        backgroundColor: 'green'
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 0.5,
        backgroundColor: 'transparent'
    },
    mark: {
        width: 150,
        height: 150
    },
    signin: {
        backgroundColor: '#FF3366',
        padding: 10,

        alignItems: 'center'
    },
    signup: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: .15
    },
    inputs: {
        marginTop: 10,
        marginBottom: 10,
        flex: .25
    },
    inputPassword: {
        marginLeft: 15,
        width: 20,
        height: 21
    },
    inputUsername: {
      marginLeft: 15,
      width: 20,
      height: 20
    },
    inputContainer: {
        padding: 10,
        borderWidth: 1,
        borderBottomColor: '#CCC',
        borderColor: 'transparent'
    },
    input: {
        position: 'absolute',
        left: 61,
        top: 12,
        right: 0,
        height: 20,
        fontSize: 14
    },
    forgotContainer: {
      alignItems: 'flex-end',
      padding: 15,
    },
    greyFont: {
      color: '#D8D8D8'
    },
    whiteFont: {
      color: '#FFF'
    }
})

export default Login1;
