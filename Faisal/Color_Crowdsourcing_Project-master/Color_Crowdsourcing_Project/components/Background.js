import React from 'react'
import { ImageBackground, StyleSheet } from 'react-native'

export default function Background(props) {
  return (
    <ImageBackground 
      source={require('../assets/background.png')}
      style={styles.container} {...props}>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent:"center",
    alignItems:'center',
    flex:1
  },
})
