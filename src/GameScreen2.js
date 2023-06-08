import { Button, Dimensions, ImageBackground, Pressable, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View,Image, Alert,BackHandler, Modal, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import {Audio} from 'expo-av'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faFaceSmile } from '@fortawesome/free-solid-svg-icons';


const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;
var dir=1
var dir2=1
var kon=1
var c= parseInt(windowWidth/10);
var end=parseInt(windowWidth/130+c*9)
var start=parseInt(windowWidth/130)
//var x=windowWidth/29
//var y=windowWidth/29
var SL=[   [start+c*3+6,start+c-12],[start+c*3+9,start+c-4],[start+c*3+13,start+c+10],
           [start+c*4,start+c*2],
            //4th ladder 0  3
           [start+c*7-14,start+c+20],[start+c*7-18,start+c+24],[start+c*6+10,start+c*2],
           [start+c*6+4,start+c*2+13], [start+c*6-5,start+c*3],[start+c*6-14,start+c*3+13],
           [start+c*5,start+c*4],
             //13 ladder 4 10
           [start+c*7+15,start+c*3+23],[start+c*8,start+c*4],
            //33 ladder  11  12

            [start+c*9-8,start+c*4+18],[start+c*9-15,start+c*5],[start+c*9-18,start+c*5+10],
            [start+c*8,start+c*6],
            //50 ladder 13  16
            [start+c+3,start+c*4+12],[start+c+13,start+c*5],[start+c+19,start+c*5+13],
            [start+c+23,start+c*5+20],[start+c*2,start+c*6],
            // 42 ladder 17  21
            [start+c-6,start+c*6+14],[start+c-9,start+c*6+23],[start+c-14,start+c*7],
            [start+c-20,start+c*7+12],[start+c-23,start+c*7+20],[start,start+c*8],
            //62 ladder 22  27
         
           [start+c*6+10,start+c*7+15],[start+c*6+20,start+c*7+25],[start+c*6+30,start+c*8],
           [start+c*7+4,start+c*8+10],[start+c*7+15,start+c*8+20],[start+c*8,start+c*9],
           //74 ladder 28  33

          [start+c*6-12,start+c*2-15],[start+c*6-30,start+c*2-15],[start+c*5-10,start+c*2-20],
          [start+c*5-19,start+c],[start+c*5,start+19],[start+c*5+10,start-10],
          [start+c*4+14,start],[start+c*4,start],
          //29 snake 34 41

          [start+10,start+c*3],[start+20,start+c*2],[start+20,start+c*2-9],[start+c,start+c*2-17],
          [start+c+10,start+c*2-25],[start+c+20,start+c],[start+c+15,start+10],[start+c*2,start],
          // 40 snake 42 49

          [start+c*2+10,start+c*4-10],[start+c*2+25,start+c*4-20],[start+c*2+35,start+c*3],
          [start+c*2+35,start+c*3-10],[start+c*2+30,start+c*3-20],[start+c*2,start+c*3-23],
          [start+c+15,start+c*2],[start+c+15,start+c*2-10],[start+c+25,start+c*2-20],
          [start+c*2,start+c],
          // 43 snake 50 59

          [start+c*6+7,start+c*5-9],[start+c*6+9,start+c*5-25],[start+c*6+10,start+c*5-35],
          [start+c*9,start+c*3],
          // 54 snake 60 63
          [start+c*5-20,start+c*6-10],[start+c*5-20,start+c*6-20],[start+c*5,start+c*6-20],
          [start+c*5+10,start+c*6-25],[start+c*5+10,start+c*5],[start+c*5,start+c*5-10],
          [start+c*5-20,start+c*5-15],[start+c*4,start+c*5-20],[start+c*4,start+c*4],
          // 66 snake  64 72
         
          [start+c*4,start+c*7-15],[start+c*4-8,start+c*7-25],[start+c*4-12,start+c*6],
          [start+c*4-12,start+c*6-12],[start+c*4,start+c*6-18],[start+c*4+12,start+c*6-18],
          [start+c*4+18,start+c*5],[start+c*4,start+c*5-10],[start+c*3+18,start+c*5],
          [start+c*3+18,start+c*5+10],[start+c*3,start+c*5+18],[start+c*3-12,start+c*5+5],
          [start+c*2,start+c*5],
          // 76 snake 73 85

          [start+c*8+10,start+c*8-20],[start+c*8+10,start+c*7],[start+c*8+10,start+c*7-10],
          [start+c*8,start+c*7-13],[start+c*8-12,start+c*7-18],[start+c*7+10,start+c*6],
          [start+c*7+15,start+c*5+10],[start+c*7,start+c*5],
          //89 snake 86  93
          [start+c+10,start+c*9-10],[start+c+15,start+c*9-30],[start+c+15,start+c*8],
          [start+c+15,start+c*8-20],[start+c+15,start+c*8-35],[start+c*2+15,start+c*6],
          [start+c*2,start+c*6-20],[start+c,start+c*6-20],[start+c-10,start+c*6-20],
          [start+c-15,start+c*5],[start+c-20,start+c*4],[start,start+c*4]
          //99 snake  94 105
    ]
 
 
const GameScreen2 = ({ navigation }) => {
  
  const [p1X, setp1X] = useState(start)
  const [p1Y, setp1Y] = useState(start) 
  const [p1X2, setp1X2] = useState(start)
  const [p1Y2, setp1Y2] = useState(start)
 
 const [first, setfirst] = useState(1)
 const [diceimg, setdiceimg] = useState(1)
 const [chalo, setchalo] = useState(1)//setting to avoid touch while computer turn
 
 const [modalVisible, setModalVisible] = useState(false);
 const [Win, Whowin] = useState('');//use for modal
 const [kiski, setkiski] = useState(1)//use for colour of modal text
 const [isOpen, setIsOpen] = useState(false);
 const [isOpen2, setIsOpen2] = useState(false);
  const [T1, setT1] = useState(2)
  const [T2, setT2] = useState(2)
 var tem= p1X
 var tem2=p1Y

 var  tem3=p1X2
 var tem4=p1Y2

 var i=0
 var j=0
 
 const handleSelectOption = (option) => {
  setT1(option);
  setIsOpen(false);
};

const handleSelectOption2 = (option) => {
  setT2(option);
  setIsOpen2(false);
};


 async function Snakesound(){
  console.log('Loading Sound');
  const { sound } = await Audio.Sound.createAsync( require('../assets/snakesound.mp3') );
  //setSound(sound);

  console.log('Playing Sound');
  await sound.playAsync();
}
async function Laddersound(){
  console.log('Loading Sound');
  const { sound } = await Audio.Sound.createAsync( require('../assets/mario_woo!.wav') );
  //setSound2(sound);

  console.log('Playing Sound');
  await sound.playAsync();
}
async function Dicesound(){
  // console.log('Loading Sound');
  const { sound } = await Audio.Sound.createAsync( require('../assets/RATTLE1.wav') );
  //setSound3(sound);

  // console.log('Playing Sound');
  await sound.playAsync();
}
async function Chalneykasound(){
 
  const { sound } = await Audio.Sound.createAsync( require('../assets/magicstep.wav') );
  //setChalneyka(sound);

 
  await sound.playAsync();
}

useEffect(() => {
  const backAction = () => {
    Alert.alert('Hold on!', 'Are you sure you want to go back?', [
      {
        text: 'Nahi',
        onPress: () => null,
        style: 'cancel',
      },
      {text: 'HA JII', onPress: () => BackHandler.exitApp()},
    ]);
    return true;
  };

  const backHandler = BackHandler.addEventListener(
    'hardwareBackPress',
    backAction,
  );

  return () => backHandler.remove();
}, []);

 function extra(r,o,m) {
  let late=100
  Snakesound();
   for ( let ind = r; ind <= o; ind++) {
       if(m==1){
        setTimeout(() => {
          setp1X(SL[ind][0])
          setp1Y(SL[ind][1])
        }, late); 
        late+=50  
      }
      else{
        setTimeout(() => {
          setp1X2(SL[ind][0])
          setp1Y2(SL[ind][1])
        }, late); 
        late+=50 
      }
         
   }
 }

 function Ladder(r,o,m) {
  let late=100
  Laddersound()
  for ( let ind = r; ind <= o; ind++) {
    if(m==1){
     setTimeout(() => {
       setp1X(SL[ind][0])
       setp1Y(SL[ind][1])
     }, late); 
     late+=50  
   }
   else{
     setTimeout(() => {
       setp1X2(SL[ind][0])
       setp1Y2(SL[ind][1])
     }, late); 
     late+=50 
   }
      
}
 }
  

     const  steps = (s) => {  
     
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
                              Ladder(0,3,1)
                            }
                          
                           else if(tem == start+c*9 && tem2==(start+c*4) && i==s ){
                             // 50 ladder
                             Ladder(13,16,1)
                               }
                           else if(tem == start+c &&  tem2==(start+c*4) && i==s ){
                               //42 ladder
                               Ladder(17,21,1)
                                 }
                           else if(tem == start+c && tem2==(start+c*6) && i==s ){
                                 //62 ladder
                                 Ladder(22,27,1)
                                   }
                           else if(tem == start+c*6 && tem2==(start+c*2) && i==s ){
                               // 27 snake
                               extra(34,41,1)
                             }
                             else if(tem == start+c*2 && tem2==(start+c*4) && i==s ){
                               // 43 snake
                               dir=0
                               extra(50,59,1)
                             }    
                             else if(tem == start+c*5 && tem2==(start+c*6) && i==s ){
                              // 66 snake
                              extra(64,72,1)
                            } 
                            else if(tem == start+c*8 && tem2==(start+c*8) && i==s ){
                              // 89 snake
                              dir=0
                              extra(86,93,1)
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
                    // console.log('fb')

                    if(tem == start &&  tem2 ==(start+c*9)){
                      Whowin('RED WINS')
                      setkiski(1)
                      setModalVisible(true)
                    }

                    else if(tem == start+c*7 &&  tem2 ==(start+c) && i==s ){
                      // 13 ladder
                      
                      dir=1
                      Ladder(4,10,1)
                      }
                      else if(tem == start+c*7 &&  tem2==(start+c*3) && i==s ){
                        // 33 ladder
                        dir=1
                        Ladder(11,12,1)
                      }
                      else if(tem == start+c*6 &&  tem2==(start+c*7) && i==s ){
                        // 74 ladder
                        
                        Ladder(28,33,1)
                      }
                      else if(tem == start && tem2==(start+c*3) && i==s ){
                        // 40 snake
                        dir=1
                        extra(42,49,1)
                      }
                      else if(tem == start+c*6 && tem2==(start+c*5) && i==s ){
                        // 54 snake
                        extra(60,63,1)
                      }
                      else if(tem == start+c*4 && tem2==(start+c*7) && i==s ){
                        // 76 snake
                        extra(73,85,1)
                      }
                      else if(tem == start+c && tem2==(start+c*9) && i==s ){
                        // 99 snake
                        dir=1
                        extra(94,105,1)
                      }
                  }
               }
         }



         //////////////////////////////////////////////////////////////////////////////

      const  steps2 = (s) => {  
       
          if(dir2){

             if(tem3+c > end ){
          
              tem4+=c
             setp1Y2(tem4)
             dir2=0
             j++
           
              
             }
             else{
               tem3+=c;
               setp1X2(tem3)
               j++
               if(tem3 == start+c*3 && tem4==start && j==s){
                 // 4 ladder
                 Ladder(0,3,2)
                }
             
               else if(tem3 == start+c*9 && tem4==(start+c*4) && j==s ){
                 // 50 ladder
                 Ladder(13,16,2)
                   }
               else if(tem3 == start+c &&  tem4==(start+c*4) && j==s ){
                   //42 ladder
                   Ladder(17,21,2)
                     }
               else if(tem3 == start+c && tem4==(start+c*6) && j==s ){
                     //62 ladder
                     Ladder(22,27,2)
                       }

               else if(tem3 == start+c*6 && tem4==(start+c*2) && j==s ){
                               // 29 snake
                         extra(34,41,2)
                }
                else if(tem3 == start+c*2 && tem4==(start+c*4) && j==s ){
                  // 43 snake
                  dir2=0
                  extra(50,59,2)
                }    
                else if(tem3 == start+c*5 && tem4==(start+c*6) && j==s ){
                 // 66 snake
                 extra(64,72,2)
               } 
               else if(tem3 == start+c*8 && tem4==(start+c*8) && j==s ){
                 // 89 snake
                 dir2=0
                 extra(86,93,2)
                } 
            
             }
          }
          
         else{

            if(tem3-c < start ){
              tem4+=c
             setp1Y2(tem4)
           
             dir2=1
             j++
             
             }
             
             else{
                   tem3-=c;
                   setp1X2(tem3)
                   j++
                  //  console.log('sb')
                  if(tem3 == start &&  tem4 ==(start+c*9)){
                    Whowin('BLUE WINS')
                    setkiski(0)
                    setModalVisible(true)
                  }
                    if(tem3 == start+c*7 &&  tem4 ==(start+c) && j==s ){
                     // 13 ladder
                   
                     dir2=1
                     Ladder(4,10,2)
                     }
                     else if(tem3 == start+c*7 &&  tem4==(start+c*3) && j==s ){
                       // 33 ladder
                       dir2=1
                       Ladder(11,12,2)
                     }
                     else if(tem3 == start+c*6 &&  tem4==(start+c*7) && j==s ){
                       // 74 ladder
                     
                       Ladder(28,33,2)
                     }

                      else if(tem3 == start && tem4==(start+c*3) && j==s ){
                        // 40 snake
                        dir2=1
                        extra(42,49,2)
                      }
                      else if(tem3 == start+c*6 && tem4==(start+c*5) && j==s ){
                        // 54 snake
                        extra(60,63,2)
                      }
                      else if(tem3 == start+c*4 && tem4==(start+c*7) && j==s ){
                        // 76 snake
                        extra(73,85,2)
                      }
                      else if(tem3 == start+c && tem4==(start+c*9) && j==s ){
                        // 99 snake
                        dir2=1
                        extra(94,105,2)
                      }
             }
          }
         }

 const Animationmove = (ko,s) => {
  
  
  
 // console.log(s)
  setfirst(s)

   var tdelay=250
  console.log(ko)
  
  for (var index = 1; index <= s; index++) {
  //  if(p1Y!=start+c*9 || tem-c*s >= start ){ 
   
 
  
  
   if(ko){
      if(p1Y!=start+c*9 || tem-c*s >= start ){
         setTimeout(() => {
           steps(s)
           Chalneykasound()
         }, tdelay);
         tdelay+=250 
        }
    }   
    else{
      if(p1Y2!=start+c*9 || tem3-c*s >= start ){
        setTimeout(() => {
          steps2(s)
          Chalneykasound()
        }, tdelay);
        tdelay+=250 
       }
    }        
  
  } 

 
} 


const delay = () => {

    var sr=Math.floor((Math.random() * 6) + 1);
    Dicesound()
    setdiceimg(0)
    setchalo(0)
    
    setTimeout(() => {
      setdiceimg(1)
    }, 1000);
  
    if(kon){
     setTimeout(() => {
      Animationmove(1,sr)
     },1000);
     kon=0
    }
    else{
      setTimeout(() => {
        Animationmove(0,sr)
       },1000);
       kon=1
    }
  
     setTimeout(() => {
       setchalo(1)
     }, 2000);
  
   } 



 const dice = [
  require('../assets/dice1.png'),
  require('../assets/dice2.png'),
  require('../assets/dice3.png'),
  require('../assets/dice4.png'),
  require('../assets/dice5.png'),
  require('../assets/dice6.png')
]

const token = [
  require('../assets/player/token1.gif'),
  require('../assets/player/token10.webp'),
  require('../assets/player/token11.webp'),
  require('../assets/player/token2.gif'),
  require('../assets/player/token3.gif'),
  require('../assets/player/token4.webp'),
  require('../assets/player/token5.gif'),
  require('../assets/player/token6.webp'),
  require('../assets/player/token7.gif'),
  require('../assets/player/token8.gif'),
]


const options = [
  { id: 1, label: 0 },
  { id: 2, label: 1 },
  { id: 3, label:  2},
  { id: 4, label: 3 },
  { id: 5, label: 4 },
  { id: 6, label: 5},
  { id: 7, label: 6 },
  { id: 8, label:  7},
  { id: 9, label: 8 },
  { id: 10, label: 9 },
  
];
// useEffect(() => {
//   return chalneyka
//   ? () => {
//       console.log('Unloading Sound');
//       sound.unloadAsync();
//     }
//   : undefined;
// }, [chalneyka])


  return (
    <ImageBackground  style={{ height:'100%',width:'100%',}} source={require('../assets/forest4.png')}>
    <View style={styles.container}>

    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
        
          setModalVisible(!modalVisible);
          navigation.navigate('Home')
        }}>
       <View style={styles.centeredView}>
           <ImageBackground style={{ height:'70%',width:'70%',left:30}} source={require('../assets/dancing1.gif')}>
            <Image style={{ height:'70%',width:'70%',}} source={require('../assets/celebration.gif')}></Image>
           </ImageBackground>

            <Text style={kiski?styles.Wincolour1:styles.Wincolour2} >{Win}</Text>
        </View>
          </Modal>
     
      <Text>{first}</Text>
       <ImageBackground style={{width:windowWidth,height:windowWidth}} source={require('../assets/snake.jpg')}>
       
        
       
        <ImageBackground  style={[styles.player,{bottom:p1Y,left:p1X,backgroundColor:'blue'}]} source={token[T1]} ></ImageBackground>
        <ImageBackground  style={[styles.player,{bottom:p1Y2,left:p1X2,backgroundColor:'red'}]} source={token[T2]} ></ImageBackground>
        

    </ImageBackground>     


      
      <TouchableOpacity  onPress={()=>{chalo? delay():alert("wait for your turn");}}>
      <ImageBackground  style={styles.dice} source={(diceimg)?(dice[first-1]):(require('../assets/dicegif.gif'))}>
      </ImageBackground>
      </TouchableOpacity>
     


     <View style={{width:'100%',justifyContent:'center',
     alignItems:'center',flexDirection:'row',}}>

      
      <TouchableOpacity onPress={()=>{setp1X(start),setp1Y(start),setp1X2(start),setp1Y2(start)}}  style={styles.reset}>
        <Text style={styles.resetText}>Reset</Text>
      </TouchableOpacity>
     
     </View>

{/* //emoji selectin view */}

     <View style={{width:'100%',height:100}}>
         <View style={{width:'100%',height:50,alignItems:'center',flexDirection:'row'}}>
            <Pressable onPress={() => {setIsOpen(!isOpen)}} style={{padding:20,}}>
            <FontAwesomeIcon size={30} style={{}} icon={faFaceSmile}></FontAwesomeIcon>  
            </Pressable>
            
             {isOpen && (
                    <FlatList
                   
                      data={options}
                      keyExtractor={(item) => item.id.toString()}
                      renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => handleSelectOption(item.label)}>
                           <Image style={{width:50,height:50}} source={token[item.label]} ></Image>
                        </TouchableOpacity>
                      )}
                      horizontal
                    />
                  )}
         </View >
         
         <View style={{width:'100%',height:50,alignItems:'center',flexDirection:'row'}}>
         <Pressable onPress={() => {setIsOpen2(!isOpen2)}} style={{padding:20,}}>
            <FontAwesomeIcon size={30} style={{}} icon={faFaceSmile}></FontAwesomeIcon>  
            </Pressable>
            
             {isOpen2 && (
                    <FlatList
                   
                      data={options}
                      keyExtractor={(item) => item.id.toString()}
                      renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => handleSelectOption2(item.label)}>
                           <Image style={{width:50,height:50}} source={token[item.label]} ></Image>
                        </TouchableOpacity>
                      )}
                      horizontal
                    />
                  )}
          
         </View>
     </View>

   </View>
   </ImageBackground>
  )
}

export default GameScreen2

const styles = StyleSheet.create({
  container:{
   flex:1,
   justifyContent:'center',
   alignItems:'center',
  
  // paddingVertical:30,
   
  },
  centeredView: {
   
    justifyContent: 'center',
    alignItems: 'center',
   left:'15%',
   top:'19%',
   width:'70%',
   height:'40%',
   borderRadius:30,
    backgroundColor:'#fff'
  },
  player:{
    width:windowWidth/10,
    height:windowWidth/10,
    backgroundColor:'white',
    position:'absolute',
    borderRadius:70,
   
  },
  

  dice: {
    width: 70,
    height: 70,
    borderRadius:20,
    marginTop:20,
  },
  reset: {
    backgroundColor: 'blue',
    height:40,
    width:100,
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 50,
    marginTop: 20,
  },resetText:{
    color: '#fff',
    fontWeight: 'bold',
  },
  Wincolour1:{
    color: 'blue',
    fontSize:20
  },
  Wincolour2:{
    color: 'red',
    fontSize:20
  },

})