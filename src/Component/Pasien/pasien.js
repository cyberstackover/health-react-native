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
         Left,
         Thumbnail,
         Body,
         Card,
         CardItem,
         Right
       } from 'native-base';

class pasien extends Component {
  render() {
     const { navigate } = this.props.navigation;
    return (
    	<Container>
    		<Image source={require('../../Images/Bg.jpg')} style={styles.bgimage}/>
	    	<Content>
		    	<Button transparent style={styles.st_header} onPress={() => this.props.navigation.navigate('DrawerOpen')}>
		    		<Icon ios='ios-menu' android="md-menu" style={styles.st_size} />
		    	</Button>
		    	  <Title style={styles.st_title1}> PASIEN </Title>
            <Card style={styles.st_card1}>
              <CardItem>
                  <Left>
                    <Thumbnail source={{uri: 'https://cdn.pixabay.com/photo/2017/03/31/08/32/beauty-2190682_640.jpg'}} />
                    <Body>
                      <Text style={styles.right}>Catherine</Text>
                      <Text note style={styles.right}>April 15, 2016</Text>
                    </Body>
                  </Left>
                   <Right >
                    <Icon name="arrow-forward" onPress={() => navigate('Input')}/>
                  </Right>
              </CardItem>
            </Card>
            <Card style={styles.st_card1}>
              <CardItem >
                  <Left>
                    <Thumbnail source={{uri: 'https://cdn.pixabay.com/photo/2017/09/25/13/12/man-2785071_640.jpg'}} />
                    <Body>
                      <Text style={styles.right}>Simon Robben</Text>
                      <Text note style={styles.right}>April 15, 2018</Text>
                    </Body>
                  </Left>
                   <Right>
                    <Icon name="arrow-forward" onPress={() => navigate('Input')}/>
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
      marginBottom: 20,
    },
    st_title3:{
      color: '#ffffff', 
      fontSize: 17,
      marginLeft: 40,
      marginRight: 40,
    },
    st_card1:{
      flex : 0,
      marginTop: 0,
      marginLeft: 15,
      marginRight: 15,
    },
    right : {
      width:100,
    }
});

export default pasien;