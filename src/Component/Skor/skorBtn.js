import React, {Component} from 'react';
import { 
  StyleSheet, 
  Text, 
  View
} from 'react-native';

import {
  Content,
  Card,
  CardItem,
  Button,
  Body
} from 'native-base';

export default class SkorBtn extends React.Component {

  render() {

    return (
          <Button key={this.props.keyval} block info style={styles.st_button} onPress={() => this.props.questionAct(this.props.data.id)}>
                <Text style={styles.st_title4}>{this.props.data.nama}</Text>
          </Button>
    );
  }


}


const styles = StyleSheet.create({
     st_button:{
      width: 300,
      height: 50,
      borderRadius: 20, 
      marginTop: 10,
      marginLeft: 30,
      marginRight: 30,
    },
      st_title4:{
      fontSize: 12,
    }
});
