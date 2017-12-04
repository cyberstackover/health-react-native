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
         Card,
         List,
         ListItem
       } from 'native-base';

class profil extends Component {
  render() {
    return (
    	<Container>
    		<Image source={require('../../Images/Bg.jpg')} style={styles.bgimage}/>
	    	<Content>
		    	<Button transparent style={styles.st_header} onPress={() => this.props.navigation.navigate('DrawerOpen')}>
		    		<Icon ios='ios-menu' android="md-menu" style={styles.st_size} />
		    	</Button>
		    	  <Title style={styles.st_title1}> PROFIL </Title>
            <List>
              <ListItem style={styles.st_item}>
                <Text style={styles.st_text}>Nama</Text>
              </ListItem>
              <ListItem style={styles.st_item}>
                <Text style={styles.st_text}>Username</Text>
              </ListItem>
              <ListItem style={styles.st_item}>
                <Text style={styles.st_text}>Email</Text>
              </ListItem>
              <ListItem style={styles.st_item}>
                <Text style={styles.st_text}>Password</Text>
              </ListItem>
              <ListItem style={styles.st_item}>
                <Text style={styles.st_text}>Rumah Sakit</Text>
              </ListItem>
              <ListItem style={styles.st_item}>
                <Text style={styles.st_text}>Alamat Rumah Sakit</Text>
              </ListItem>
              <ListItem style={styles.st_item}>
                <Text style={styles.st_text}>Telp Rumah Sakit</Text>
              </ListItem>
              <Button block info style={styles.st_button}>
                <Text style={styles.st_text}>SIMPAN</Text>
              </Button>
            </List>
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
      marginTop: 25,
    },
    st_form:{
    	flex: 1,
    	flexDirection: 'row',
    	justifyContent: 'center',  
    },
    st_card:{
    	backgroundColor: '#FFFFFF50',
    	marginRight: 18,
    },
    st_button:{
      width: 300,
      height: 50,
      borderRadius: 20, 
      marginTop: 30,
      marginLeft: 30,
      marginRight: 30,
    },
    st_title4:{
      fontSize: 15,
      color: '#ffffff',
      paddingLeft: 10,
    },
    st_item:{
      marginRight: 18,
      marginTop: 8,
      backgroundColor: '#FFFFFF50',

    },
    st_text:{
      color: '#ffffff',
      paddingLeft: 10,
    }
});

export default profil;