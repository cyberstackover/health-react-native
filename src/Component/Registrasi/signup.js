'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';
import SignUp from './signupform';
import { Container, Header, Content, Form, Item, Input, Label, Thumbnail, Button } from 'native-base';
class signup extends Component {
  render() {
  	
    return (
	<View style={styles.container}>
    <Image source={require('../../Images/Bg.jpg')} style={styles.bgimage}/>
        <View style={styles.loginForm}>
            <SignUp data={this.props.navigation}/>
        </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
      flex: 1, 
      backgroundColor: '#27CD49',
    },
    loginForm : {
    	flex: 1,
        marginTop : -10,
    },
    center:{
      	alignItems: 'center',
    },
    center1:{
      	alignItems: 'center',
    },
    font:{
    	fontSize: 25,
    	color: 'white',
    	marginTop: 25,
    	fontWeight: 'bold',
    },
    images:{
    	marginTop: 6,
    },
    form:{
    	flex: 1,
    	alignSelf: 'flex-start',
    	justifyContent: 'flex-start', 
    },
    bgimage:{
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute', 
    },
});


export default signup;