import React, { Component } from 'react';
import { View , StyleSheet,Image,Text} from 'react-native';

import logo from './src/images/covid2.png';
import { Header} from "native-base";

import BagianAtas from './Component/BagianAtas';

import ImageSlider from 'react-native-image-slider';




export default class App extends Component {
  constructor(){
    super();
    this.state={
        images:[
  "http://imageshack.com/a/img922/4108/3UQBjV.png",
  "http://imageshack.com/a/img924/5889/nysSua.png",
  "http://imageshack.com/a/img923/6418/rkTuQk.png",
  "http://imageshack.com/a/img924/781/0ia3JF.png"
        ]
    }
  }

  render() {
    return (
      <View style={{flex:1}}>
        
        <View>
        
      <Image source={logo} style={styles.logo}/>  
      </View>
      <Text style={{marginLeft:120}}>Updated Selasa, 31 Maret 2020</Text>
      <Header style={{height:5, color:"red"}} />
      <View style={{height:100}}>
    
      <ImageSlider
       images={this.state.images}
       autoPlayWithInterval={3000}
      />
      </View>
       <BagianAtas />
            <Text style={{marginLeft:110, marginBottom:10}}>
          Source: corona.jatengprov.go.id/</Text>

</View>
    
    );
  }
}

const styles = StyleSheet.create({
  logo:{
     flex: 0,
      width: "60%",
      height: 300,
      justifyContent:"center",
      alignItems:"center",
  marginLeft:75
     
     
  }
})