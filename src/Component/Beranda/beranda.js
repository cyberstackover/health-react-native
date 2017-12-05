'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Image,
  AsyncStorage
} from 'react-native';

import { Container,
		 Content, 
         Header,
         Text,
         Left,
         Button,
         Icon,
         Body,
         Title,
         Card, 
         CardItem
       } from 'native-base';

class beranda extends Component {

    _handleLogOut = (navigate) => {
    AsyncStorage.removeItem('tokenUser');
    alert('You have been logged out.');
    navigate('Login');
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
    	<Container>
    		<Image source={require('../../Images/Bg.jpg')} style={styles.bgimage}/>
	    	<Content>
		    	<Button transparent style={styles.st_header} onPress={() => this.props.navigation.navigate('DrawerOpen')}>
		    		<Icon ios='ios-menu' android="md-menu" style={styles.st_size} />
		    	</Button>
		    	  <Title style={styles.st_title1}> MENU </Title>
            <Title style={styles.st_title2}> DOKTER </Title>
              <Button block info style={styles.st_button} onPress={() => navigate('Skor')}>
                <Text style={styles.st_title4}>SSIS Skor</Text>
              </Button>
              <Button block info style={styles.st_button} onPress={() => navigate('Data')}>
                <Text style={styles.st_title4}>Data</Text>
              </Button>
              <Button block info style={styles.st_button} onPress={() => navigate('Profil')}>
                <Text style={styles.st_title4}>Profil</Text>
              </Button>
              <Button block info style={styles.st_button} onPress={() => navigate('Tentang')}>
                <Text style={styles.st_title4}>SSIS</Text>
              </Button>
              <Button block info style={styles.st_button} onPress={() => this._handleLogOut(navigate)}>
                <Text style={styles.st_title4}>Sign Out</Text>
              </Button>
	    	</Content>
               <Text style={styles.st_title3}>Spine Surgery Injury Severity (SSIS)</Text>
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
    st_title2:{
      alignItems: 'center',
      fontSize: 30,
      fontWeight: '800',  
    },
    st_button:{
      width: 300,
      height: 50,
      borderRadius: 20, 
      marginTop: 30,
      marginLeft: 30,
      marginRight: 30,
    },
    st_title3:{
      color: '#ffffff', 
      fontSize: 17,
      marginLeft: 40,
      marginRight: 40,
    },
    st_title4:{
      fontSize: 20,
    }
});


export default beranda;