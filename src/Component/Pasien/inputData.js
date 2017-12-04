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
         CardItem,
         Right
       } from 'native-base';

class inputData extends Component {
  render() {
     const { navigate } = this.props.navigation;
    return (
    	<Container>
    		<Image source={require('../../Images/Bg.jpg')} style={styles.bgimage}/>
	    	<Content style={styles.st_header}>
		    	  <Title style={styles.st_title1}> Input Data </Title>
            <Title> Dik Ricky </Title>
            <Card style={styles.st_card1}>
              <CardItem>
                <Text>1 Maret 2017</Text>
              </CardItem>
              <CardItem>
                <Text>16 Juni 2016</Text>
              </CardItem>
              <CardItem>
                <Text>28 Juli 2017</Text>
              </CardItem>
            </Card>
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
    	marginTop: 20,
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
    st_card1:{
      marginTop: 20,
      marginLeft: 15,
      marginRight: 15,
    }
});

export default inputData;