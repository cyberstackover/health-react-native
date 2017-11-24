'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  TouchableOpacity
} from 'react-native';
import { Container, Header, Content, Item, Input, Form, Thumbnail, Label, Button, Text} from 'native-base';
class loginform extends Component {
    constructor() {
    super();
    this.state = {
      username : '',
      password : '',
      success : ''
    }
  }

    handleClick(){
      fetch('http://dev.infinite-creative.com/sispak_api/Auth/token', {
       method: 'POST',
       headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                  },
        // body : 
        body: JSON.stringify({
              username: this.state.username,
              password: this.state.password,
             })
        })
        .then((response) => response.json())
        .then((response) => {
                
                if (response.token != undefined) {
                   alert("Berhasil login");
                }else{
                  alert("Gagal Login");
                }
               // this.setState({success : response.success});

        }).done();
  }

  render() {
    const { navigate } = this.props.data;
    return (
    	<Content style={styles.contentLogin}>
            <View style={styles.center}>
                  <Thumbnail square large source={require('../../Images/logo.png')} style={styles.images}/>
                    <Text style={styles.font1}>Spine Surgery Injury Severity (SSIS)</Text>
            </View>
          
          <Form style={styles.formLogin}>
            <Item>
              <Input style={styles.st_inputfnt} placeholder='Username' placeholderTextColor='white' onChangeText={(text) => this.setState({username:text})}/>
            </Item>
            <Item>
              <Input style={styles.st_inputfnt} placeholder='Password' placeholderTextColor='white' secureTextEntry={true} onChangeText={(text) => this.setState({password:text})}/>
            </Item>
          </Form>
          	<Button block warning style={styles.footerBottom} onPress={() => this.handleClick()}>
	            <Text>Sign In</Text>
	        </Button>


         <View style={styles.footerBottomSignUp}>
            <TouchableOpacity onPress={() => navigate('Daftar')}>
              <Text style={styles.st_signup}>
                Belum pernah registrasi? SIGN UP!
              </Text>
            </TouchableOpacity>
        </View>

        </Content>
    );
  }
}

const styles = StyleSheet.create({
	footerBottom:{
		marginTop: 26,
		paddingTop: 10,
		marginLeft: 16,
		marginRight: 16,
	},
  formLogin : {
    marginTop :30,
    paddingLeft : 10,
    paddingRight : 30,
  },
  contentLogin : {
    marginTop : 10,
  },
  images:{
      marginTop: 80,
      width: 150,
      height: 150,
      borderRadius: 20,
  },
  font1:{
      fontSize: 20,
      color: 'white',
      fontWeight: 'bold',
      fontFamily: 'Cochin',
    },
  center:{
      flex: 1,
        alignItems: 'center',
  },
  footerBottomSignUp:{
      marginTop: 56,
      alignItems: 'center', 
    },
  st_signup:{
      color: 'white',
      fontWeight: '500', 
    },
  st_inputfnt:{
      color: 'white',
  }
});


export default loginform;