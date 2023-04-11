import { Button, Dimensions, ImageBackground, Pressable, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;




const App = () => {





  var c= parseInt(windowWidth/10);
 var end=parseInt(windowWidth/29+c*9)
 var start=parseInt(windowWidth/29)
 //var x=windowWidth/29
 //var y=windowWidth/29

  const [p1Y, setp1Y] = useState(start)
  const [p1X, setp1X] = useState(start)
 const [dir, setdir] = useState(1)
 const [first, setfirst] = useState(1)
 const [diceimg, setdiceimg] = useState(1)
// const [inicial, setinicial] = useState(true)


   steps = () => {

    s=Math.floor((Math.random() * 6) + 1);
  
   console.log(s)
   setfirst(s)
   
     
      if(p1X+c*s > end && dir==1){
             var diff=(p1X+c*s)-(end+c); //c plus ho raha bottom maintain key liye
             var tem=(end)-diff
             if(tem ==end-c*2 &&  p1Y+c ==start+c ){// 2 row ladder
              setp1X(start+(c*5))
              setp1Y(start+(c*4))
              setdir(1)
              }
             else if(tem ==end-c*2 &&  p1Y+c ==start+c*3 ){// 4 row ladder
                setp1X(start+(c*8))
                setp1Y(start+(c*4))
                setdir(1)
                }
             else if(tem ==end-c*3 &&  p1Y+c ==start+c*5 ){// 6 row snake
                  setp1X(start+(c*9))
                  setp1Y(start+(c*3))
                  setdir(0)
               }
             else if(tem ==end-c*4 &&  p1Y+c ==start+c*7 ){// 8 row ladder
                setp1X(start+(c*8))
                setp1Y(start+(c*9))
                setdir(1)
                }
             else if(tem ==end-c*5 &&  p1Y+c ==start+c*7 ){// 8 row snake
                  setp1X(start+(c*2))
                  setp1Y(start+(c*5))
                  setdir(0)
                 }
                
             else{
             setp1Y(p1Y+c)
             setp1X(tem)
             setdir(!dir)
            }
         }
   else if(p1X-c*s < start && dir==0 ){

       var diff=Math.abs((p1X-c*s)-(start-c));
       var tem=(start)+diff

          if(p1Y==end)
          { }

          else if(tem ==end-c*7 &&  p1Y+c ==start+c*4 ){// 5 row snake
            setp1X(start+(c*2))
            setp1Y(start+(c))
            setdir(0)
            }
          else if(tem ==end-c*4 &&  p1Y+c ==start+c*6 ){// 7 row snake
              setp1X(start+(c*4))
              setp1Y(start+(c*4))
              setdir(1)
              }
          else if(tem ==end-c*8 &&  p1Y+c ==start+c*6 ){// 7 row ladder
                setp1X(start)
                setp1Y(start+(c*8))
                setdir(1)
              }
          
          else{
        
          setp1Y(p1Y+c)
          setp1X(tem)
          setdir(!dir)
        }
      }

      
     
   else{
      
           if(dir){

               if(p1X+(c*s) == start+c*3 && p1Y==start){ //1 row ladder
               setp1X(start+(c*4))
               setp1Y(start+c*2)
               setdir(1)
              }
              else if(p1X+(c*s) == start+c*6 &&  p1Y==start+c*2 ){ //3 row snake
                setp1X(start+(c*4))
                setp1Y(start)
                setdir(1)
               }
               else if(p1X+(c*s) == start+c &&  p1Y==start+c*4 ){ // 5 row ladder
                setp1X(start+(c*2))
                setp1Y(start+c)
                setdir(1)
               }

               else if(p1X+(c*s) == start+c*2 &&  p1Y==start+c*4 ){ // 5 row snake
                setp1X(start+(c*2))
                setp1Y(start+c*1)
                setdir(0)
               }
               else if(p1X+(c*s) == end &&  p1Y==start+c*4 ){// 5 row ladder
                setp1X(start+(c*8))
                setp1Y(start+c*6)
                setdir(1)
               }
               else if(p1X+(c*s) == start+c*1 &&  p1Y==start+c*6 ){// 7 row ladder
                setp1X(start)
                setp1Y(start+(c*8))
                setdir(1)
               }
               else if(p1X+(c*s) == start+c*5 &&  p1Y==start+c*6 ){ //7 row snake
                setp1X(start+(c*4))
                setp1Y(start+c*4)
                setdir(1)
               }
               else if(p1X+(c*s) == start+c*8 &&  p1Y==start+c*8 ){// 9 row snake
                setp1X(start+(c*7))
                setp1Y(start+c*5)
                setdir(0)
               }
              else{
              setp1X(p1X+(c*s))
              }


           }
             
         else{

            if(p1X-(c*s) == start+c*7 &&  p1Y==start+c ){// 2 row ladder
            setp1X(start+(c*5))
            setp1Y(start+(c*4))
            setdir(1)
            }

            else if(p1X-(c*s) == start &&  p1Y==start+c*3 ){// 4 row snake
            setp1X(start+(c*2))
            setp1Y(start)
            setdir(1)
             }

             
             else if(p1X-(c*s) == start+c*7 &&  p1Y==start+c*3 ){// 4 row ladder
              setp1X(start+(c*8))
              setp1Y(start+c*4)
              setdir(1)
             }
             else if(p1X-(c*s) == start+c*6 &&  p1Y==start+c*5 ){// 6 row snake
              setp1X(start+(c*9))
              setp1Y(start+(c*3))
              setdir(0)
             }
             else if(p1X-(c*s) == start+c*4 &&  p1Y==start+c*7 ){// 8 row snake
              setp1X(start+(c*2))
              setp1Y(start+(c*5))
              setdir(0)
             }
           else if(p1X-(c*s) == start+c &&  p1Y==start+c*9 ){// 10 row snake
              setp1X(start)
              setp1Y(start+(c*4))
              setdir(1)
             }
           else{
            setp1X(p1X-(c*s))
            }
         }
          
      }
   
  
   
  // console.log(p1Y)
 // windowWidth/29+c*p1X
 }

 const delay = () => {
  setdiceimg(0)
   const img = ()=> {
    setdiceimg(1)
   }
   setTimeout(img,1000)
   setTimeout(steps,1000)
 } 

 const dice = [
  require('./assets/dice1.jpg'),
  require('./assets/dice2.jpg'),
  require('./assets/dice3.jpg'),
  require('./assets/dice4.jpg'),
  require('./assets/dice5.jpg'),
  require('./assets/dice6.jpg')
]


  return (
    <View style={styles.container}>
      
      <Text>{first}</Text>
       <ImageBackground style={{width:windowWidth,height:windowWidth,}} source={require('./assets/snake.jpg')}>
        <View style={[styles.player,{bottom:p1Y,left:p1X}]}>
           
         </View>
       </ImageBackground>
      <Button title='pressme' onPress={()=>{steps()}}></Button>
      <Pressable onPress={()=>{delay()}}>
      <ImageBackground  style={styles.dice} source={diceimg?dice[first-1]:require('./assets/dicegif.gif')}></ImageBackground></Pressable>
       
   </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
   flex:1,
   justifyContent:'center',
   alignItems:'center',
   
  },
  player:{
    width:windowWidth/29,
    height:windowWidth/29,
    backgroundColor:'black',
    position:'absolute',
    borderRadius:10,
   
  },
  dice: {
    width: 50,
    height: 50,
  }
})