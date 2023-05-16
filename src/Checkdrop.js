import React, { useEffect, useRef } from 'react';
import { View, StyleSheet ,Animated,TouchableOpacity,} from 'react-native';

const DropAnimation = () => {
    const translateY = useRef(new Animated.Value(-100)).current;
  
    setTimeout(() => {
        startAnimation()
    }, 2000);
  
    const startAnimation = () => {
      Animated.spring(translateY, {
        toValue: 300,
        useNativeDriver: true,
      }).start();
    };
  
    return (
     
        <Animated.View style={[styles.box, { transform: [{ translateY }] }]} />
      
    );
  };

const Checkdrop = () => {
  return (
    <View style={styles.container}>
      <DropAnimation />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
      },
      box: {
        width: 100,
        height: 100,
        // top:-50,
        backgroundColor: 'red',
      },
});

export default Checkdrop;
