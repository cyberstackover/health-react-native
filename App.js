import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/Component/Home/home';
import LoginScreen from './src/Component/Login/login';
import RegistrasiScreen from './src/Component/Registrasi/signup';
import BerandaScreen from './src/Component/Beranda/beranda';
import PasienScreen from './src/Component/Pasien/pasien';
import ProfilScreen from './src/Component/Profil/profil';
import SkorScreen from './src/Component/Skor/skor';
import { StackNavigator, DrawerNavigator } from 'react-navigation';

const Dr_Beranda = DrawerNavigator({
    Beranda:{
      screen: BerandaScreen,
  },
    Pasien:{
      screen: PasienScreen,
  },
    Profil:{
      screen: ProfilScreen,
    }
},
{
    drawerWidth: 240,
});

const App = StackNavigator({
  Home: {
      screen: HomeScreen,
  },
  Login:{
      screen: LoginScreen,
  },
  Daftar:{
      screen: RegistrasiScreen,
  },
  Pasien:{
      screen: PasienScreen,
  },
  Beranda:{
      screen: Dr_Beranda,
  },
  Profil:{
    screen: ProfilScreen,  
  },
  Skor : {
    screen : SkorScreen,
  }
},
  {
  headerMode: 'none',
  navigationOptions:{ 
    header:{ visible:false }
  },
});

export default App;