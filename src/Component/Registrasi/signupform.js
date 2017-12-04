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
      selectedRS: "key0",
      activeTab : 'Pasien',
      nama : '',
      username : '',
      password : '',
      email : '',
      dokter :[],
      rs:[],
    };
  }

   getDataDokter() {
       fetch('http://dev.infinite-creative.com/sispak_api/Dokter/', {
       method: 'GET',
       headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    // 'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjEiLCJ1c2VybmFtZSI6ImFkbWluIn0.F5-b8XNvMzFcE7uyYTQwX_HaQBpADkO1epAdiqJ45EI'
                  }
        })
        .then((response) => response.json())
        .then((response) => {
               this.setState({dokter : response.data});
        }).done();
  }

  getDataRumahSakit() {
       fetch('http://dev.infinite-creative.com/sispak_api/Rumahsakit/', {
       method: 'GET',
       headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                  }
        })
        .then((response) => response.json())
        .then((response) => {
               this.setState({rs : response.data});
        }).done();
  }


  componentDidMount(){
    this.getDataDokter();
    this.getDataRumahSakit();
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

  onValueRS(value: string) {
    this.setState({
      selectedRS: value
    });
  }

  onTabPress (val) {
    this.setState({
      activeTab : val
    });
  }

  handleRegister(){
          if (this.state.activeTab == 'Pasien') {
              fetch('http://dev.infinite-creative.com/sispak_api/Pasien/insert', {
                 method: 'POST',
                 headers: {
                              'Accept': 'application/json',
                              'Content-Type': 'application/json',
                            },
                  // body : 
                  body: JSON.stringify({
                        nama: this.state.nama,
                        username: this.state.username,
                        email: this.state.email,
                        password: this.state.password,
                        gender : this.state.selectedGender,
                        id_dokter : this.state.selectedDokter,
                        tanggal_lahir : this.state.date,
                       })
                  })
                  .then((response) => response.json())
                  .then((response) => {
                          
                           if (response.status) {
                             alert("Berhasil tambah pasien");
                          }else{
                            alert("Gagal Login");
                          }
                         // this.setState({success : response.success});

                  }).done();
          }else{
                fetch('http://dev.infinite-creative.com/sispak_api/Dokter/insert', {
                 method: 'POST',
                 headers: {
                              'Accept': 'application/json',
                              'Content-Type': 'application/json',
                            },
                  // body : 
                  body: JSON.stringify({
                        nama: this.state.nama,
                        username: this.state.username,
                        email: this.state.email,
                        password: this.state.password,
                        id_rumahsakit : this.state.selectedRS,
                       })
                  })
                  .then((response) => response.json())
                  .then((response) => {
                          
                          if (response.status) {
                             alert("Berhasil tambah dokter");
                          }else{
                            alert("Gagal Login");
                          }
                         // this.setState({success : response.success});

                  }).done();
          }

  }
   

    _renderFormReg() {
        if (this.state.activeTab == 'Pasien') {
            let comboDokter = this.state.dokter.map(function(data, index){
                        return (
                             <Item key={index} label={data.nama} value={data.id_dokter} />
                      )
                  
                  });

            return (
                  <Form style={styles.formLogin}>
                        <Item>
                          <Input style={styles.st_inputfnt} onChangeText={(text) => this.setState({nama:text})} placeholder='Nama' placeholderTextColor='white'/>
                        </Item>
                        <Item>
                          <Input style={styles.st_inputfnt} onChangeText={(text) => this.setState({username:text})} placeholder='Username' placeholderTextColor='white'/>
                        </Item>
                        <Item>
                          <Input style={styles.st_inputfnt} onChangeText={(text) => this.setState({email:text})} placeholder='Email' placeholderTextColor='white'/>
                        </Item>
                        <Item>
                          <Input style={styles.st_inputfnt} onChangeText={(text) => this.setState({password:text})} placeholder='Password' secureTextEntry={true} placeholderTextColor='white'/>
                        </Item>
                        <Picker style={styles.st_kelamin} mode="dropdown" selectedValue={this.state.selectedGender} onValueChange={this.onValueGender.bind(this)}>
                          <Item label="Jenis Kelamin" value="key0" />
                          <Item label="Laki-Laki" value="l" />
                          <Item label="Wanita" value="p" />
                        </Picker>
                        <Picker style={styles.st_dokter} mode="dropdown" selectedValue={this.state.selectedDokter} onValueChange={this.onValueDokter.bind(this)}>
                          <Item label="Pilih Dokter" value="key0" />
                          {comboDokter}
                        </Picker>
                        <DatePicker
                            style={styles.st_datepck}
                            date={this.state.date}
                            mode="date"
                            placeholder="Tanggal Lahir"
                            format="YYYY-MM-DD"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            onDateChange={(date) => {this.setState({date: date})}}
                        />
                  </Form>
            );
        } else {
               let comboRumahSakit = this.state.rs.map(function(data, index){
                        return (
                             <Item key={index} label={data.nama} value={data.id_rumahsakit} />
                      )
                  
                  });
            return (
                <Form style={styles.formLogin}>
                        <Item>
                          <Input style={styles.st_inputfnt} onChangeText={(text) => this.setState({nama:text})} placeholder='Nama Dokter' placeholderTextColor='white'/>
                        </Item>
                        <Item>
                          <Input style={styles.st_inputfnt} onChangeText={(text) => this.setState({username:text})} placeholder='Username' placeholderTextColor='white'/>
                        </Item>
                        <Item>
                          <Input style={styles.st_inputfnt} onChangeText={(text) => this.setState({email:text})} placeholder='Email' placeholderTextColor='white'/>
                        </Item>
                        <Item>
                          <Input style={styles.st_inputfnt} onChangeText={(text) => this.setState({password:text})} placeholder='Password' secureTextEntry={true} placeholderTextColor='white'/>
                        </Item>
                        <Item>
                          <Picker style={styles.st_rs} mode="dropdown" selectedValue={this.state.selectedRS} onValueChange={this.onValueRS.bind(this)}>
                              <Item label="Pilih Rumah Sakit" value="key0" />
                              {comboRumahSakit}
                          </Picker>
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

            {this._renderFormReg()}
        

            <Button block warning style={styles.footerBottom} onPress={() => this.handleRegister()}>
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
    st_rs: {
      marginHorizontal: -2,
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
