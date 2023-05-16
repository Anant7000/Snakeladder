import { Button, Dimensions, ImageBackground, Pressable, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View,Image, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'

const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;
var dir=1
var dir2=1
var kon=1
var c= parseInt(windowWidth/10);
var end=parseInt(windowWidth/70+c*9)
var start=parseInt(windowWidth/70)
//var x=windowWidth/29
//var y=windowWidth/29
var SL=[[start+c*3+6,start+c-12],[start+c*3+9,start+c-4],[start+c*3+13,start+c+10],[start+c*4,start+c*2],
            //4th ladder 0  3
           [start+c*7-14,start+c+20],[start+c*7-18,start+c+24],[start+c*6+10,start+c*2],[start+c*6+4,start+c*2+13],
           [start+c*6-5,start+c*3],[start+c*6-14,start+c*3+13],[start+c*5,start+c*4],
             //13 ladder 4 10
           [start+c*7+15,start+c*3+23],[start+c*8,start+c*4],
            //33 ladder  11  12

            [start+c*9-8,start+c*4+18],[start+c*9-15,start+c*5],[start+c*9-18,start+c*5+10],[start+c*8,start+c*6],
            //50 ladder 13  16
            [start+c+3,start+c*4+12],[start+c+13,start+c*5],[start+c+19,start+c*5+13],[start+c+23,start+c*5+20],[start+c*2,start+c*6],
            // 42 ladder 17  21
            [start+c-6,start+c*6+14],[start+c-9,start+c*6+23],[start+c-14,start+c*7],[start+c-20,start+c*7+12],[start+c-23,start+c*7+20],[start,start+c*8],
            //62 ladder 22  27
         
           [start+c*6+10,start+c*7+15],[start+c*6+20,start+c*7+25],[start+c*6+30,start+c*8],[start+c*7+4,start+c*8+10],[start+c*7+15,start+c*8+20],[start+c*8,start+c*9],
           //74 ladder 28  33


          [start+c*6,start+c*2],[start+c*6-12,start+c*2-15],[start+c*6-30,start+c*2-15],[start+c*5-10,start+c*2-20],
          [start+c*5-19,start+c],[start+c*5,start+19],[start+c*5+10,start-10],[start+c*4+14,start],[start+c*4,start]
    ]
 
 
const App = () => {
  
  const [p1X, setp1X] = useState(start)
  const [p1Y, setp1Y] = useState(start) 
  const [p1X2, setp1X2] = useState(start)
  const [p1Y2, setp1Y2] = useState(start)

 const [first, setfirst] = useState(1)
 const [diceimg, setdiceimg] = useState(1)
 const [chalo, setchalo] = useState(1)
 
 var tem= p1X
 var tem2=p1Y

 var  tem3=p1X2
 var tem4=p1Y2

 var i=0
 var late=100
 function extra(r,o,m) {
  // if(r == undefined){}
  // if(o == undefined){}
   for ( let ind = r; ind <= o; ind++) {
       if(m==1){
        setTimeout(() => {
          setp1X(SL[ind][0])
          setp1Y(SL[ind][1])
        }, late); 
        late+=100  
      }
      else{
        setTimeout(() => {
          setp1X2(SL[ind][0])
          setp1Y2(SL[ind][1])
        }, late); 
        late+=100 
      }
         
   }
 }
  

     const  steps = (s,m) => {  
              
               if(dir){
                  if(tem+c > end ){
                  
                  setp1Y(p1Y+c)
                 
                  dir=0
                  i++
                
                    tem2+=c
                  }
                  else{
                    tem+=c;
                    setp1X(tem)
                    i++
                    if(tem == start+c*3 && tem2==start && i==s){
                      // 4 ladder
                      extra(0,3,m)
                     }
                  
                    else if(tem == start+c*9 && tem2==(start+c*4) && i==s ){
                      // 50 ladder
                        extra(13,16,m)
                        }
                    else if(tem == start+c &&  tem2==(start+c*4) && i==s ){
                        //42 ladder
                          extra(17,21,m)
                          }
                    else if(tem == start+c && tem2==(start+c*6) && i==s ){
                          //62 ladder
                            extra(22,27,m)
                            }
                  
                  }
               }
               
               else{
                 if(tem-c < start ){
                  setp1Y(p1Y+c)
                
                  dir=1
                  i++
                  tem2+=c
                  }
                  
                  else{
                    tem-=c;
                    setp1X(tem)
                    i++
                    console.log('fb')

                     if(tem == start+c*7 &&  tem2 ==(start+c) && i==s ){
                      // 13 ladder
                      
                      dir=1
                      extra(4,10,m)
                      }
                      else if(tem == start+c*7 &&  tem2==(start+c*3) && i==s ){
                        // 33 ladder
                        dir=1
                      extra(11,12,m)
                      }
                      else if(tem == start+c*6 &&  tem2==(start+c*7) && i==s ){
                        // 33 ladder
                      
                      extra(28,33,m)
                      }
                  }
               }
         }



         //////////////////////////////////////////////////////////////////////////////

      const  steps2 = (s,m) => {  
         
          if(dir2){

             if(tem3+c > end ){
             

              tem4+=c
             setp1Y2(tem4)
            
             dir2=0
             i++
           
              
             }
             else{
               tem3+=c;
               setp1X2(tem3)
               i++
               if(tem3 == start+c*3 && tem4==start && i==s){
                 // 4 ladder
                 extra(0,3,m)
                }
             
               else if(tem3 == start+c*9 && tem4==(start+c*4) && i==s ){
                 // 50 ladder
                   extra(13,16,m)
                   }
               else if(tem3 == start+c &&  tem4==(start+c*4) && i==s ){
                   //42 ladder
                     extra(17,21,m)
                     }
               else if(tem3 == start+c && tem4==(start+c*6) && i==s ){
                     //62 ladder
                       extra(22,27,m)
                       }
            
             }
          }
          
          else{
            if(tem3-c < start ){
              tem4+=c
             setp1Y2(tem4)
           
             dir2=1
             i++
             
             }
             
             else{
               tem3-=c;
               setp1X2(tem3)
               i++
               console.log('sb')
                if(tem3 == start+c*7 &&  tem4 ==(start+c) && i==s ){
                 // 13 ladder
               
                 dir2=1
                 extra(4,10,m)
                 }
                 else if(tem3 == start+c*7 &&  tem4==(start+c*3) && i==s ){
                   // 33 ladder
                   dir2=1
                 extra(11,12,m)
                 }
                 else if(tem3 == start+c*6 &&  tem4==(start+c*7) && i==s ){
                   // 33 ladder
                 
                 extra(28,33,m)
                 }
             }
          }
    }

 const Animationmove = (ko) => {
  
  
 var s=Math.floor((Math.random() * 6) + 1);
  
 // console.log(s)
  setfirst(s)

   var tdelay=200
  console.log(ko)
  
  for (var index = 1; index <= s; index++) {
  //  if(p1Y!=start+c*9 || tem-c*s >= start ){ 
   
   if(ko){
      if(p1Y!=start+c*9 || tem-c*s >= start ){
         setTimeout(() => {
           steps(s,1)
         }, tdelay);
         tdelay+=200 
        }
    }   
    else{
      if(p1Y2!=start+c*9 || tem3-c*s >= start ){
        setTimeout(() => {
          steps2(s,2)
        }, tdelay);
        tdelay+=200 
       }
    }        
  
  } 

 
} 

 const delay = () => {
  setdiceimg(0)
  setchalo(0)
  
  setTimeout(() => {
    setdiceimg(1)
  }, 1000);

  if(kon){
   setTimeout(() => {
    Animationmove(1)
   },1000);
   kon=0
  }
  else{
    setTimeout(() => {
      Animationmove(0)
     },1000);
     kon=1
  }

   setTimeout(() => {
     setchalo(1)
   }, 2000);

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
       <ImageBackground style={{width:windowWidth,height:windowWidth}} source={require('./assets/snake.jpg')}>
       
        
        
       
        <ImageBackground  style={[styles.player,{bottom:p1Y,left:p1X}]} source={require('./assets/pngwing.png')} ></ImageBackground>
        <ImageBackground  style={[styles.player,{bottom:p1Y2,left:p1X2,backgroundColor:'green'}]} source={require('./assets/pngwing.png')} ></ImageBackground>
        

    </ImageBackground>     



      <TouchableOpacity onPress={()=>{chalo? delay():alert("wait for your turn");}}>
      <ImageBackground  style={styles.dice} source={(diceimg)?(dice[first-1]):(require('./assets/dicegif.gif'))}>
      </ImageBackground>
      </TouchableOpacity>
       

      <TouchableOpacity onPress={()=>{setp1X(start),setp1Y(start)}}  style={styles.reset}>
        <Text style={styles.resetText}>Reset</Text>
      </TouchableOpacity>


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
    width:windowWidth/14,
    height:windowWidth/14,
    backgroundColor:'white',
    position:'absolute',
    borderRadius:70,
   
  },
  dice: {
    width: 70,
    height: 70,
  },
  reset: {
    backgroundColor: 'blue',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 50,
    marginTop: 20,
  },resetText:{
    color: '#fff',
    fontWeight: 'bold',
  },

})