'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import { 
  Container, 
  Header, 
  Content, 
  Item, 
  Input, 
  Form, 
  Label, 
  Button, 
  Text, 
  Picker, 
  Thumbnail, 
  Segment
} from 'native-base';

import DatePicker from 'react-native-datepicker';

class signupform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedGender: "key0",
      selectedDokter: "key0",
      activeTab : 'Pasien',
    };
  }

//Setting Picker Jenis Kelamin
  onValueGender(value: string) {
    this.setState({
      selectedGender: value
    });
  }

//Setting Picker Dokter
  onValueDokter(value: string) {
    this.setState({
      selectedDokter: value
    });
  }

  onTabPress (val) {
    this.setState({
      activeTab : val
    });
  }

    _renderCancel() {
        if (this.state.activeTab == 'Pasien') {
            return (
                  <Form style={styles.formLogin}>
                        <Item>
                          <Input style={styles.st_inputfnt} placeholder='Nama' placeholderTextColor='white'/>
                        </Item>
                        <Item>
                          <Input style={styles.st_inputfnt} placeholder='Username' placeholderTextColor='white'/>
                        </Item>
                        <Item>
                          <Input style={styles.st_inputfnt} placeholder='Email' placeholderTextColor='white'/>
                        </Item>
                        <Item>
                          <Input style={styles.st_inputfnt} placeholder='Password' placeholderTextColor='white'/>
                        </Item>
                        <Picker style={styles.st_kelamin} mode="dropdown" selectedValue={this.state.selectedGender} onValueChange={this.onValueGender.bind(this)}>
                          <Item label="Jenis Kelamin" value="key0" />
                          <Item label="Laki-Laki" value="key1" />
                          <Item label="Wanita" value="key2" />
                        </Picker>
                        <Picker style={styles.st_dokter} mode="dropdown" selectedValue={this.state.selectedDokter} onValueChange={this.onValueDokter.bind(this)}>
                          <Item label="Pilih Dokter" value="key0" />
                          <Item label="Dr. Rizky Setyonovanto" value="key1" />
                          <Item label="Dr. Agum Laksono" value="key2" />
                        </Picker>
                        <DatePicker
                            style={styles.st_datepck}
                            date={this.state.date}
                            mode="date"
                            placeholder="Select Date"
                            format="DD-MM-YYYY"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            onDateChange={(date) => {this.setState({date: date})}}
                        />
                  </Form>
            );
        } else {
            return (
                <Form style={styles.formLogin}>
                        <Item>
                          <Input style={styles.st_inputfnt} placeholder='Nama Dokter' placeholderTextColor='white'/>
                        </Item>
                        <Item>
                          <Input style={styles.st_inputfnt} placeholder='Username' placeholderTextColor='white'/>
                        </Item>
                        <Item>
                          <Input style={styles.st_inputfnt} placeholder='Email' placeholderTextColor='white'/>
                        </Item>
                        <Item>
                          <Input style={styles.st_inputfnt} placeholder='Password' placeholderTextColor='white'/>
                        </Item>
                        <Item>
                          <Input style={styles.st_inputfnt} placeholder='Rumah Sakit' placeholderTextColor='white'/>
                        </Item>
                        <Item>
                          <Input style={styles.st_inputfnt}placeholder='Alamat Rumah Sakit' placeholderTextColor='white'/>
                        </Item>
                        <Item>
                          <Input style={styles.st_inputfnt} placeholder='Nomor Telp Rumah Sakit' placeholderTextColor='white'/>
                        </Item>
                  </Form>



              );
        }
    }

  render() {
     const { navigate } = this.props.data;
    return (
     <Content styles={styles.contentLogin}>
            <View style={styles.center}>
                <Text style={styles.st_regis}>Registrasi</Text>
                <Text style={styles.font1}>Spine Surgery Injury Severity (SSIS)</Text>
            </View>

            <Segment style={styles.category}> 
              <Button first active={this.state.activeTab === 'Pasien'} onPress={() => this.onTabPress('Pasien')}><Text>Pasien</Text></Button>
              <Button last  active={this.state.activeTab === 'Dokter'} onPress={() => this.onTabPress('Dokter')}><Text>Dokter</Text></Button>
            </Segment>

            {this._renderCancel()}
        

          	<Button block warning style={styles.footerBottom}>
	            <Text>Daftar</Text>
	        </Button>

          <View style={styles.footerBottomSignUp}>
            <TouchableOpacity onPress={() => navigate('Login')}>
              <Text style={styles.st_signup}>
                Sudah mempunyai Account? LOGIN!
              </Text>
            </TouchableOpacity>
        </View>
    </Content>
    );
  }
}

const styles = StyleSheet.create({
	footerBottom:{
		marginTop: 16,
		paddingTop: 10,
		marginLeft: 16,
		marginRight: 16,
	},
  category : {
      marginTop: 10,
  },
  formLogin : {
    	marginTop: 16,
    	marginBottom: 16,
    	paddingLeft : 10,
    	paddingRight : 30,
  },
  center:{
      flex: 1,
        alignItems: 'center',
        marginTop: 40,
  },
    images:{
      marginTop: 20,
  },
  footerBottomSignUp:{
      marginTop: 26,
      alignItems: 'center', 
      marginBottom : 26,
    },
    font1:{
      fontSize: 12,
      color: 'white',
      fontWeight: 'bold',
      fontFamily: 'Cochin',
    },
    contentLogin : {
    	marginTop : 10,
  },
    st_kelamin: {
      marginHorizontal: 14,
      width: 316,
      color: 'white',
  },
    st_dokter: {
      marginHorizontal: 14,
      width: 316,
      color: 'white',
  },
    st_datepck:{
      marginHorizontal: 14,
      width: 316,
      borderColor: '#ffffff',
      borderWidth: 1,
  },
    st_signup:{
      color: 'white',
      fontWeight: '500', 
    },
    st_regis:{
      fontSize: 28,
      color: 'white',
      fontWeight: 'bold',
      fontFamily: 'Cochin',
    },
      st_inputfnt:{
      color: 'white',
    },
});


export default signupform;