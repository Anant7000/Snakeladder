import { Button, Dimensions, ImageBackground, Pressable, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
//import { Audio } from 'expo-av';

const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;


const App = () => {

  var add = parseInt(windowWidth/10);
/*   
 var end=parseInt(windowWidth/29+c*9) */
 var start=parseInt(windowWidth/29)
 //var x=windowWidth/29
 //var y=windowWidth/29
/*  const P1x_arr2 =[
  [0,0],
  [start+(add*0),start+(add*9)],
] */


  const P1x_arr =[[0,0]]

  var position = 1
  for (let i = 0; i <= 9; i++) {    
    if (position) {
      for (let j = 0; j <= 9; j++) {
       // console.log(i,j) 
        P1x_arr.push([start+(add*i),start+(add*j)])   
      }
      position = 0
    } else {
      for (let j = 9; j >= 0; j--) {
       // console.log(i,j) 
        P1x_arr.push([start+(add*i),start+(add*j)])   
      }
      position = 1
    }    
  }

//  const [p1X, setp1X] = useState(P1x_arr[9])
//  const [p1Y, setp1Y] = useState(start)

// console.log(start)

/*  console.log(p1X+add) */

 const [first, setfirst] = useState(1)
 const [diceimg, setdiceimg] = useState(1)
 const [go, setgo] = useState(0)
 const [x, setx] = useState(0)
 
var snake_ladder =(s)=>{
  var z = x+s
  if (z <= 100) {
    console.log(z)
    //for ladder
   if (z == 4) {setx(25)}
   else if (z == 13) {setx(46)}
   else if (z == 33) {setx(49)}
   else if (z == 42) {setx(63)}
   else if (z == 50) {setx(69)}
   else if (z == 62) {setx(81)}
   else if (z == 74) {setx(92)}
   
   //for snake
   if (z == 27) {setx(5)}
   else if (z == 40) {setx(3)}
   else if (z == 43) {setx(18)}
   else if (z == 54) {setx(31)}
   else if (z == 66) {setx(45)}
   else if (z == 76) {setx(58)}
   else if (z == 89) {setx(53)}
   else if (z == 99) {setx(41)}
   
   if (z == 100) {
    console.log('Game Over: You Win')
   }  
   }

} 



 const Animationmove = () => {
 var s = Math.floor((Math.random() * 6) + 1);  
  // console.log(s)
  setfirst(s)


  if (go) {
    if ((x+s) <= 100) {      
      for (let i = 1; i <= s; i++) {    
        setTimeout(()=>{setx(x+i)}, 400*i)        
       }  
       setTimeout(()=>{snake_ladder(s)}, 400*(s+1))
    }

  }
  else if((s == 6) && (go == 0)) {
    setx(1)
    setgo(1)
  } 
  
}


 

 const delay = () => {
  setdiceimg(0)
   const img = ()=> {
    setdiceimg(1)
   }
   setTimeout(img,1000)
   setTimeout(Animationmove,1000)
 } 

 const dice = [
  require('./assets/dice1.jpg'),
  require('./assets/dice2.jpg'),
  require('./assets/dice3.jpg'),
  require('./assets/dice4.jpg'),
  require('./assets/dice5.jpg'),
  require('./assets/dice6.jpg')
]

// var z = 49

  return (
    <View style={styles.container}>
      
      <Text>{first}</Text>
       <ImageBackground style={{width:windowWidth,height:windowWidth,}} source={require('./assets/snake.jpg')}>

        
        <View style={[styles.player,{bottom:P1x_arr[x][0],left:P1x_arr[x][1]}]}>
      
         </View>
       </ImageBackground>

       <View style={styles.bottom}>
       <Pressable style={styles.diceContainer} onPress={()=>{delay()}}>
      <ImageBackground  style={styles.dice} source={diceimg?dice[first-1]:require('./assets/dicegif.gif')}></ImageBackground></Pressable>

      <TouchableOpacity onPress={()=>{setx(0),setgo(0)}}  style={styles.reset}>
        <Text style={styles.resetText}>Rest</Text>
      </TouchableOpacity>
       </View>
      
      
       
   </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
   flex:1,
   justifyContent:'center',
   alignItems:'center',
   backgroundColor: '#000',
   
  },
  player:{
    width:windowWidth/29,
    height:windowWidth/29,
    backgroundColor:'black',
    position:'absolute',
    borderRadius:10,  
  },
  player2:{
    position: 'absolute',
    width: 32,
    height: 32,
    marginLeft: -8,
    marginTop:-10,
  },
  dice: {
    width: 50,
    height: 50,        
  },diceContainer: {
    backgroundColor:'#fff',
    padding: 5,
    borderRadius:10,
    borderWidth:5,
    borderStyle:'dashed',
    borderColor: 'red',
  },

  reset: {
    backgroundColor: '#000',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 50,
    marginTop: 20,
    borderWidth:5,
    borderStyle:'dashed',
    borderColor: '#fff',
  },resetText:{
    color: '#fff',
    fontWeight: 'bold',
  },

  bottom:{
    width: '100%',
    flexDirection: 'row',
    justifyContent:'space-evenly',
    height: 200,
    alignItems: 'center',
  }

})