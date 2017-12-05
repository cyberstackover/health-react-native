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

import { Col, Row, Grid } from 'react-native-easy-grid';

class detailData extends Component {
  render() {
     const { navigate } = this.props.navigation;
    return (
    	<Container>
    		<Image source={require('../../Images/Bg.jpg')} style={styles.bgimage}/>
	    	<Content style={styles.st_header}>
            <Title style={styles.st_nama}> Pasien </Title>
            <Card style={styles.st_score}>
                <Text style={styles.st_txtskor}>Skor</Text>
                <Text style={styles.st_txtangka}>4000</Text>
            </Card>
            
            <Card style={styles.st_card1}>
                  <CardItem style={styles.st_carditem1}>
                    <Left>
                        <Text style={styles.st_txtcard}>Resiko terjadinya infeksi pada tulang dan otot</Text>
                    </Left>
                  </CardItem>
            </Card>

            <Card style={styles.st_card2}>
                  <CardItem>
                    <Left>
                      <Body>
                        <Text >Kehidupan</Text>
                        <Text note>Skor : 1000</Text>
                      </Body>
                    </Left>
                  </CardItem>
            </Card>
             <Card style={styles.st_card2chld}>
                  <CardItem>
                    <Left>
                    <Body>
                        <Text>Saraf</Text>
                        <Text note>Skor : 1000</Text>
                    </Body>
                    </Left>
                  </CardItem>
            </Card>
             <Card style={styles.st_card2chld}>
                  <CardItem>
                    <Left>
                      <Body>
                        <Text>Tulang</Text>
                        <Text note>Skor : 1000</Text>
                      </Body>
                    </Left>
                  </CardItem>
            </Card>
            <Card style={styles.st_card2chld}>
                  <CardItem>
                    <Left>
                      <Body>
                        <Text>Otot</Text>
                        <Text note>Skor : 1000</Text>
                      </Body>
                    </Left>
                  </CardItem>
            </Card>
            <Card style={styles.st_card2chld}>
                  <CardItem>
                    <Left>
                      <Body>
                        <Text>Kulit</Text>
                        <Text note>Skor : 1000</Text>
                      </Body>
                    </Left>
                  </CardItem>
            </Card>
          <Grid style={{marginTop:20, marginBottom: 20}}>  
            <Col style={{marginLeft: 50}}>
              <Button success style={{width:125}}>
                <Text style={{marginLeft: 25}}>Detail</Text>
              </Button> 
            </Col>
            <Col style={{marginRight: 50}}>
              <Button success>
                <Text>Rekomendasi</Text>
              </Button>
            </Col>
          </Grid>
            
           
 
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
    	marginTop: 10,
    },
    st_nama :{
      fontSize: 30,
      marginTop:20,
      marginBottom:10,
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
    st_txtskor:{
      color: 'white',
      marginTop: 40,
      marginLeft: 55,
      fontSize: 20, 
    },
     st_txtangka:{
      color:'white',
      marginLeft: 45,
      fontSize: 26, 
    },
    st_carditem1 : {
       alignItems: 'center',
      backgroundColor :'#f0ad4e' 
    },
    st_card1:{
      marginTop: 0,
      marginLeft:30,
      marginRight: 15,
      width: 300,
     
    },
    st_card2:{
      marginTop:20,
      marginLeft:15,
      marginRight: 15,
      alignItems: 'center',
    },
    st_card2chld :{
      marginLeft:15,
      marginRight: 15,
      marginTop: -1,
      alignItems: 'center',
    },
    st_txtcard : {
      textAlign: 'center', 
    },
    st_score:{
      flex: 0,
      marginLeft: 105,
      borderRadius: 150,
      width:150,
      height: 150,
      backgroundColor: '#f0ad4e',
      marginBottom: 20
    },
    right : {
      width:200,
    }
});

export default detailData
