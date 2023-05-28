import { StyleSheet, Text, View,Animated,TouchableOpacity,ImageBackground,Image, Pressable } from 'react-native'
import React, { useRef } from 'react'
import {useFonts  } from 'expo-font'

const PlayerScreen = ({ navigation }) => {
    const scaleValue = new Animated.Value(1);
    const scaleValue2 = new Animated.Value(1);
   

    const startPressIn = () => {
      Animated.spring(scaleValue, {
        toValue: 0.8,
        useNativeDriver: true,
      }).start();
    };
  
    const startPressOut = () => {
      Animated.spring(scaleValue, {
        toValue: 1,
        useNativeDriver: true,
      }).start();
    };

    const exitPressIn = () => {
        Animated.spring(scaleValue2, {
          toValue: 0.8,
          useNativeDriver: true,
        }).start();
      };
    
      const exitPressOut = () => {
        Animated.spring(scaleValue2, {
          toValue: 1,
          useNativeDriver: true,
        }).start();
      };


  // for drop animaton of start button
      const StartdropAnimation = () => {
        const translatestart = useRef(new Animated.Value(-300)).current;
      
        setTimeout(() => {
            startAnimation()
        }, 1500);
      
        const startAnimation = () => {
          Animated.spring(translatestart, {
            toValue: 80,
            useNativeDriver: true,
          }).start();
        };
      
        return (
          
            <Animated.View style={[styles.box, { transform: [{ translateY:translatestart }] }]} >
                     {/* for siquzze animaton */}
                 <Animated.View style={[styles.Animatedbutton,{ transform: [{ scale: scaleValue }]}]}>
               <Pressable 
              onPress={() => navigation.navigate('game')}
             onPressIn={startPressIn}
              onPressOut={startPressOut}
>
           <ImageBackground
       
            source={require('../assets/wooden.png')}
            style={{  width:150,
                height:150, justifyContent:'center',alignItems:'center' }}
            >
               <Text style={{fontSize:23,color:'#fff'}}>with Robo</Text>
         
             </ImageBackground>
             </Pressable>
             </Animated.View>
            </Animated.View>
          
        );
      };
//for drop animattion of exit button 
      const ExitdropAnimation = () => {
        const translateexit = useRef(new Animated.Value(-200)).current;
      
        setTimeout(() => {
            startAnimation2()
        }, 1000);
      
        const startAnimation2 = () => {
          Animated.spring(translateexit, {
            toValue: 300,
            useNativeDriver: true,
          }).start();
        };
      
        return (
          
            <Animated.View style={[styles.box, { transform: [{ translateY:translateexit }] }]} >
               
                {/* for siquzze animaton */}

                  <Animated.View style={{ transform: [{ scale: scaleValue2 }] }}>
                <Pressable 
                  onPress={() => navigation.navigate('game2')}
                 onPressIn={exitPressIn}
                  onPressOut={exitPressOut}
>        
                <ImageBackground
              source={require('../assets/wooden.png')}
                style={{  width:150,
                   height:150, justifyContent:'center',alignItems:'center' }}
                  >
                  
             <Text style={{fontSize:23,color:'#fff',fontWeight:'500'}}>with friend</Text>
                 
                </ImageBackground>
              </Pressable>
                </Animated.View>
            </Animated.View>
          
        );
      };
  
      const [fontsLoaded] = useFonts({
    
        Satisfy : require('../assets/Satisfy/Satisfy-Regular.ttf'),
      });
      
      if (!fontsLoaded) {
        return null; // or show a loading screen
      }
      
  
    return (
      <View style={{ flex: 1,  alignItems: 'center',backgroundColor:'#fff' }}>
        <ImageBackground   style={{ height:'100%',width:'100%',alignItems:'center'}} source={require('../assets/foresthai-transformed.jpeg')}>
       <ExitdropAnimation />
       <StartdropAnimation />
       </ImageBackground>

      </View>
  )
}

export default PlayerScreen

const styles = StyleSheet.create({
    Animatedbutton:{
     // backgroundColor:'pink', 
       width: 140,
        height:80,
        justifyContent:'center',
        alignItems:'center',
        top:20
        
    }
})