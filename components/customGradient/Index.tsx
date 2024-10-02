import { ratingColor } from '@/constants/Colors'
import { LinearGradient } from 'expo-linear-gradient'
import { Text, View } from 'native-base'
import React from 'react'
import { Dimensions, StyleSheet } from 'react-native'
interface Props{
    firstColor?:string
    secondColor?:string 
}
const {height}=Dimensions.get('screen')
const CustomGradient = ({
    firstColor,
    secondColor
}:Props) => {
  return (
    <>
    <LinearGradient
        // Background Linear Gradient
        colors={[firstColor ?? "rgba(247, 211, 72, 0.7)", secondColor ?? '#fff']}
        start={{ x: 0.3, y: 0 }} // Adjust start position to create the desired angle
        end={{ x: 1, y: 1 }} 
        hitSlop={10}
        style={styles.background}
      >
      </LinearGradient>
    </>
  )
}

export default CustomGradient




const styles = StyleSheet.create({
    background: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: height,
    },
 
    
  });