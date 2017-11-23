import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/Component/Home/home';
import LoginScreen from './src/Component/Login/login';
import ProfilScreen from './src/Component/Profil/profil';
import RegistrasiScreen from './src/Component/Registrasi/signup';
import { StackNavigator } from 'react-navigation';

const App = StackNavigator({
  Home: {
      screen: HomeScreen,
  },
  Login:{
      screen: LoginScreen,
  },
  Profil:{
      screen: ProfilScreen,
  },
  Daftar:{
      screen: RegistrasiScreen,
  }
},
  {
  headerMode: 'none',
  navigationOptions:{ 
    header:{ visible:false }
  },
});

export default App;