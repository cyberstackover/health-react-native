'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  AppRegistry
} from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class profil extends Component {
  render() {
    return (
      <View style={styles.st_container}>
      	<Text style={styles.st_text}>PROFIL</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	st_container:{
		alignItems: 'center',
		justifyContent: 'center',  
	},
	st_text:{
		fontWeight: '700',
		color: 'white', 
	}
});


AppRegistry.registerComponent('profil', () => profil );