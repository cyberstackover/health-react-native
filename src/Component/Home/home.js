'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  AppRegistry,
  Image
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Container, 
		 Header, 
		 Content, 
		 Thumbnail, 
		 Text,
		 Button
} from 'native-base';
export default class home extends Component {
  render() {
  	const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Image source={require('../../Images/Bg.png')} style={styles.bgimage}/>
      	<Text>{'\n\n'}</Text>
      	<Thumbnail square large source={require('../../Images/logo.png')}/>
      	<Text style={styles.font}> Spine Surgery Injury Severity (SSIS)</Text>
      	<Text style={styles.font}> Skor atau Skor Prediksi</Text>
      	<Text style={styles.font}> Keselamatan Pasien pada Operasi</Text>
      	<Text style={styles.font}> Tulang Belakang (Skor PKPOTB)</Text>
      	<Text style={styles.font}> diharapkan mampu menjadi alat</Text>
      	<Text style={styles.font}> bantu dalam pengambilan</Text>
      	<Text style={styles.font}> keputusan sebelum dilakukan</Text>
      	<Text style={styles.font}> operasi. SSIS Skor ini diprakarsai</Text>
      	<Text style={styles.font}> oleh Dr. dr. Rahyussalim, Sp.OT(K)</Text>
      	<Text>{'\n'}</Text>
      	<Text style={styles.font}> Jawaban yang dipilih diharapkan</Text>
      	<Text style={styles.font}> adalah jawaban yang sebenarnya</Text>
      	<Text style={styles.font}> agar hasil lebih akurat dan data</Text>
      	<Text style={styles.font}> hasil kuesioner dijamin</Text>
      	<Text style={styles.font}> kerahasiaanya.</Text>
      	<Content>
      		<Text>{'\n'}</Text>
      		<Button large light onPress={() => navigate('Login')}><Text>MULAI</Text></Button>
      	</Content>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    font:{
    	fontSize: 18,
    	color: 'white',
    	fontFamily: 'Cochin',
    },
    bgimage:{
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute', 
    }
    });

AppRegistry.registerComponent('home', () => home );