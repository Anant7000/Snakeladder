import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet ,Animated,TouchableOpacity, FlatList, Text,} from 'react-native';

const Checkdrop = () => {
  const [scrollViewWidth, setScrollViewWidth] = useState(0);
 // const 60 = scrollViewWidth * 0.8;
  const boxDistance = scrollViewWidth - 60;
  const halfBoxDistance = boxDistance / 2;
  
  const renderItem = ({ item, index }) => (
    <Animated.View
      style={{
        transform: [
          {
            scale: pan.x.interpolate({
              inputRange: [
                (index - 1) * 60 - halfBoxDistance,
                index * 60 - halfBoxDistance,
                (index + 1) * 60 - halfBoxDistance, // adjust positioning
              ],
              outputRange: [0.8, 1, 0.8], // scale down when out of scope
              extrapolate: 'clamp',
            }),
          },
        ],
      }}>
      <View style={{
            height: '60%',
            width: 60,
            borderRadius: 24,
            backgroundColor: 'green',
          }}>
        <Text>{item}</Text>
      </View>
      
    </Animated.View>
  );
  
  const pan = useRef(new Animated.ValueXY()).current;
  
    return (
      <View style={{justifyContent:'center',alignItems:'center'}}>
  <FlatList
      horizontal
      data={[1,2,3,4,5,6,7,8,9]}
      style={[{ backgroundColor: '#6b6b6b', height: 250,width:200 }]}
      contentContainerStyle={{ paddingVertical: 16 }}
      contentInsetAdjustmentBehavior="never"
      snapToAlignment="center"
      decelerationRate="fast"
      automaticallyAdjustContentInsets={false}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      scrollEventThrottle={1}
      snapToInterval={60}
    contentInset={{
      left: halfBoxDistance,
      right: halfBoxDistance,
    }}
    contentOffset={{ x: halfBoxDistance * -1, y: 0 }}
    onLayout={(e) => {
      setScrollViewWidth(e.nativeEvent.layout.width);
    }}
    onScroll={Animated.event(
      [{ nativeEvent: { contentOffset: { x: pan.x } } }],
      {
        useNativeDriver: false,
      },
    )}
    keyExtractor={(item, index) => `${index}-${item}`}
    renderItem={renderItem}
  />
 
  
      </View>
      
  
    )
  }
  
  
  
  const styles = StyleSheet.create({
  
      container: {
          width: 100,
          height: 100,        
          backgroundColor: 'orange',
          margin: 20,
          padding: 30,
          borderRadius: 30,
          elevation: 1,
      },
  
      active: {
          transform: [{scale: 1.4},{rotate:'45deg'}], 
          elevation: 15, 
      }
  
      ,
      mytrans: {
        transform: [{scale:1}],
      }
  
  
  })

export default Checkdrop;
