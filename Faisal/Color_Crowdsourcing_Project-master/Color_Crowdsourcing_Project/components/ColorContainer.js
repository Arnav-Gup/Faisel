import React from 'react'
import { View, StyleSheet } from 'react-native'

export default function ColorContainer(props) {
  return (
  <View style={{
    flexDirection: 'row',
    flexWrap:'wrap',
    width:'90%',
    height:'40%',
    alignItems:'center',
    justifyContent:'flex-start',
    backgroundColor: props.color,
    borderRadius:9,
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1
    }
  }} {...props}></View>
  )
}
