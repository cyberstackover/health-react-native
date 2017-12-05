import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/Component/Home/home';
import LoginScreen from './src/Component/Login/login';
import RegistrasiScreen from './src/Component/Registrasi/signup';
import BerandaScreen from './src/Component/Beranda/beranda';
import PasienScreen from './src/Component/Pasien/pasien';
import InputScreen from './src/Component/Pasien/inputData';
import ProfilScreen from './src/Component/Profil/profil';
import TentangScreen from './src/Component/Tentang/tentang';
import SkorScreen from './src/Component/Skor/skor' ;

import { StackNavigator, DrawerNavigator } from 'react-navigation';

const Dr_Beranda = DrawerNavigator({
    Beranda:{
      screen: BerandaScreen,
  },
    Data:{
      screen: PasienScreen,
  },
    Profil:{
      screen: ProfilScreen,
  },
    Tentang:{
      screen: TentangScreen,
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
  Data:{
      screen: PasienScreen,
  },
  Beranda:{
      screen: Dr_Beranda,
  },
  Profil:{
    screen: ProfilScreen,  
  },
  Tentang:{
    screen: TentangScreen,
  },
  Input:{
    screen: InputScreen,
  },
  Skor:{
    screen: SkorScreen,
  },
},
  {
  headerMode: 'none',
  navigationOptions:{ 
    header:{ 
      visible: false,
      left: null,
    },
    gesturesEnabled: false,
  },
});

export default App;