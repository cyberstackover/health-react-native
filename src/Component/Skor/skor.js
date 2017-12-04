'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Image,
  AsyncStorage
} from 'react-native';

import { Container,
		     Content, 
         Header,
         Text,
         Card,
         CardItem,
         Button,
         Body,
         Icon,
         Title,
       } from 'native-base';


class skor extends Component {
    constructor(props) {
        super(props);
        this.state = {
          totalQ : 0,
          now : 1,
          token : '',
          rekom : [],
          ganti : 0,
          selesai : 0,
          score : 0,
          data : [],
          answerData : [],
        }

        // this._renderQuestion = this._renderQuestion.bind(this);
        this.getAllData = this.getAllData.bind(this);
        this.questionAct = this.questionAct.bind(this);
       
    }

    componentDidMount() {
        this.getAllData();
         this.setState({
            ganti: 1
          });
    }

    getAllData(){
      AsyncStorage.getItem('tokenUser', (error, result) => {
            if (result) {
                  fetch('http://dev.infinite-creative.com/sispak_api/survey/pertanyaan', {
                   method: 'GET',
                   headers: {
                                'Content-Type': 'application/json',
                                'Accept': 'application/json',
                                'token': result
                              }
                    })
                    .then((response) => response.json())
                    .then((response) => {
                    	this.state.token = result;
                      var total = 0;
                      var arrayTemp = [];
                          for(var i = 0 ; i < response.data.kriteria.length ; i++) {
                              total += response.data.kriteria[i].parameter.length;
                              for(var j = 0 ; j < response.data.kriteria[i].parameter.length ; j++) {
                                  arrayTemp.push(response.data.kriteria[i].parameter[j]);
                              } 
                          }
                          this.setState({
                            totalQ: total
                          });

                          this.setState({
                            data : arrayTemp
                          });
                          console.log(this.state.data);
                    }).done();
            }
        });
    }

     questionAct(id) {
        if (this.state.now >= this.state.totalQ) {
           if (this.state.now == this.state.totalQ){
           		this.state.answerData.push({id_grading : id});
           		fetch('http://dev.infinite-creative.com/sispak_api/survey/insert', {
                   method: 'POST',
                   headers: {
                                'Content-Type': 'application/json',
                                'Accept': 'application/json',
                                'token': this.state.token
                              },
                  body: JSON.stringify({
                       	grading : this.state.answerData 
                       })
                    })
                    .then((response) => response.json())
                    .then((response) => {
                        this.state.score = response.nilai;
                        this.state.rekom = response.rekomendasi;
                        this.state.derajat = response.derajat.keterangan
                        this.setState({
      			            	ganti: 1
      			          	});
			          	this.setState({
			            	selesai: 1
			          	});
                    }).done();
           }
        }else{
        	this.setState({
            	ganti: 1
          	});
           this.state.now = this.state.now + 1;
           this.state.answerData.push({id_grading : id});
        }

          
    }

    _renderQuestion() {
    	if (this.state.ganti == 1) {
    		  let total = this.state.totalQ;
		      let now = this.state.now;
          let drjt = this.state.derajat;
		      let questionNow = this.state.data[now-1].nama;
          let allrek = this.state.rekom.map((data, index) => {
                    return (
                          <Text key={index} style={styles.st_title4}>{index+1}. {data}</Text>
                      )  
                });
		      let allAnswer = this.state.data[now-1].grading.map((data, index) => {
		                return (
		                		 <Button key={index} block info style={styles.st_button} onPress={() => this.questionAct(data.id)}>
						                <Text style={styles.st_title4}>{data.nama}</Text>
						          </Button>
		                	)  
		            });
		    if (this.state.selesai == 1) {
    			let score = this.state.score;
	    		   return(
			      		     <View style={styles.st_answer}>
		                      <Title style={styles.st_title3}>YOUR SCORE</Title>
		                      <Title style={styles.st_titleQ}>{score}</Title>
                           <Content>
                          <Card>
                            <CardItem>
                              <Body>
                                <Text style={styles.st_title4}>
                                   {drjt}
                                </Text>
                              </Body>
                            </CardItem>
                            <CardItem>
                              <Body>
                                <Text style={styles.st_title4}>
                                   {allrek}
                                </Text>
                              </Body>
                            </CardItem>
                          </Card>
                        </Content>
		                  </View>
                       
			      	);
    		}else{
    			return(
		      		 <View style={styles.st_answer}>
	                      <Title style={styles.st_title3}>{now}/{total}</Title>
	                      <Title style={styles.st_titleQ}>{questionNow}</Title>
	                     {allAnswer}
	                    </View>
		      	);
    		}

		      
    	}else{
    	
    		
    	}
    	  
    }






  render() {

      if (this.state.data.length > 0) {
             
            return (
                <Container>
                  <Image source={require('../../Images/Bg.jpg')} style={styles.bgimage}/>
                  <Content>
                    <Button transparent style={styles.st_header} onPress={() => this.props.navigation.navigate('DrawerOpen')}>
                      <Icon ios='ios-menu' android="md-menu" style={styles.st_size} />
                    </Button>
                      <Title style={styles.st_title1}> Pertanyaan </Title>
                   		{this._renderQuestion()}
                 </Content>
                </Container>
            );
      }else{
        return null;
      }
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
    },
    st_title3:{
      color: '#ffffff', 
      fontSize: 25,
      marginLeft: 40,
      marginRight: 40,
    },
     st_title4:{
      fontSize: 14,
    },
    st_titleQ : {
      fontSize : 20,
      marginTop : 40,
    },
    st_answer : {
      flex : 1,
    },
     st_button:{
      width: 300,
      height: 50,
      borderRadius: 20, 
      marginTop: 10,
      marginLeft: 30,
      marginRight: 30,
    },
});

export default skor;
// GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest;