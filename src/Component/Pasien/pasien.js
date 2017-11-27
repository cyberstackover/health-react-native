'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Image
} from 'react-native';

import { Container,
		 Content, 
         Header,
         Text,
         Button,
         Icon,
         Title,
       } from 'native-base';

class pasien extends Component {
  render() {
    return (
    	<Container>
    		<Image source={require('../../Images/Bg.jpg')} style={styles.bgimage}/>
	    	<Content>
		    	<Button transparent style={styles.st_header} onPress={() => this.props.navigation.navigate('DrawerOpen')}>
		    		<Icon ios='ios-menu' android="md-menu" style={styles.st_size} />
		    	</Button>
		    	  <Title style={styles.st_title1}> PASIEN </Title>
               <Text style={styles.st_title3}>Spine Surgery Injury Severity (SSIS)</Text>
            </Content>
    	</Container>
    );
  }
}

const styles = StyleSheet.create({
	bgimage:{
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute', 
    },
    st_header:{
    	marginTop: 15,
    },
    st_size:{
    	fontSize: 30,
    	color: 'white',
    },
    st_title1:{
      alignItems: 'center',
      fontSize: 20,
      fontWeight: '400', 
    },
    st_title3:{
      color: '#ffffff', 
      fontSize: 17,
      marginLeft: 40,
      marginRight: 40,
    },
});

export default pasien;