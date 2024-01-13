import React from 'react'
import { View, StyleSheet } from 'react-native'

export default function inputContainer(props) {
  return (
  <View style={styles.inputBox} {...props}></View>
  )
}

const styles = StyleSheet.create({
    inputBox: {
        flexDirection: 'row',
        flexWrap:'wrap',
        width:'80%',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#5d8481',
        borderRadius:12,
    }
})
