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
         Body,
         Text,
         Button,
         Icon,
         Title,
         Card,
         Left,
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
            <Title style={styles.st_nama}> Dik Ricky </Title>
            <Card style={styles.st_card1}>
                  <CardItem>
                  <Left>
                    <Icon active name="medkit" />
                    <Body>
                      <Text style={styles.right}>12 November 2015</Text>
                      <Text style={styles.right}>14.00</Text>
                    </Body>
                  </Left>
                  <Right>
                    <Icon name="arrow-forward" onPress={() => navigate('Detail')}/>
                  </Right>
                </CardItem>
            </Card>
              <Card style={styles.st_card1}>
                <CardItem>
                  <Left>
                    <Icon active name="medkit"/>
                    <Body>
                      <Text style={styles.right}>12 November 2015</Text>
                      <Text style={styles.right}>14.00</Text>
                    </Body>
                  </Left>
                  <Right>
                    <Icon name="arrow-forward" onPress={() => navigate('Detail')}/>
                  </Right>
                </CardItem>
            </Card>
              <Card style={styles.st_card1}>
                 <CardItem>
                  <Left>
                    <Icon active name="medkit" />
                    <Body>
                      <Text style={styles.right}>12 November 2015</Text>
                      <Text style={styles.right}>14.00</Text>
                    </Body>
                  </Left>
                  <Right>
                    <Icon name="arrow-forward" onPress={() => navigate('Detail')}/>
                  </Right>
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
    st_nama :{
      marginBottom:20,
    },
    st_size:{
    	fontSize: 30,
    	color: 'white',
    },
    st_title1:{
      alignItems: 'center',
      fontSize: 20,
      fontWeight: '400',
      marginTop:20,
    },
    st_title3:{
      color: '#ffffff', 
      fontSize: 17,
      marginLeft: 40,
      marginRight: 40,
    },
    st_card1:{
      marginTop: 0,
      marginLeft: 15,
      marginRight: 15,
    },
    right : {
      width:200,
    }
});

export default inputData;