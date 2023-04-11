
import { Button, Dimensions, ImageBackground, Pressable, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;
 var c= windowWidth/10
//  var x=windowWidth/29+c*0
//  var y=windowWidth/29+c*0

export default function App() {

  const [p1Y, setp1Y] = useState(0)
  const [p1X, setp1X] = useState(0)

   steps = () => {

   s=Math.floor((Math.random() * 6) + 1);
   
   if (s+p1Y <= 9) {
    setp1Y((s)+p1Y)
    console.log(s)
   } else  {
    setp1X(s+p1X)
    console.log(s)
   }

 }

  return (
    <View style={styles.container}>
      
       <ImageBackground style={{width:windowWidth,height:windowWidth,}} source={require('./assets/snake.jpg')}>
        <View style={[styles.player,{bottom:windowWidth/29+c*p1X,left:windowWidth/29+c*p1Y}]}>
           
         </View>
       </ImageBackground>
      <Button title='pressme' onPress={()=>{steps()}}></Button>
       
   </View>
  )
}

const styles = StyleSheet.create({
  container:{
   flex:1,
   justifyContent:'center',
   
  },
  player:{
    width:windowWidth/29,
    height:windowWidth/29,
    backgroundColor:'black',
    position:'absolute',
    borderRadius:10,
   
  }
})