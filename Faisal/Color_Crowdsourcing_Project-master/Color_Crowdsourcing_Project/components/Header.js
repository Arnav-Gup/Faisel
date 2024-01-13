import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { Button, Icon } from '@rneui/themed'

export default function Header(props) {
  return (
    <View style = {styles.container}>
      <Button radius={"sm"} type="outline" buttonStyle={styles.settings}>
        <Icon name="settings" color="white" />
      </Button>
      <Button radius={"sm"} type="outline" buttonStyle={styles.back}>
        <Icon name="arrow-back" color="white" />
      </Button>
      <Image source={require('../assets/cocreate_logo.png')} style={styles.image} />
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 100,
  },
  container: {
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
  settings: {
    width:60,
    height:60,
    marginLeft:10,
    borderColor:"rgba(128,128,128,1)",
    borderRadius:12,
    marginTop:'12%',
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1
    }
  },
  back: {
    marginLeft:10,
    width:60,
    height:60,
    borderColor:"rgba(128,128,128,.6)",
    borderRadius:12,
    marginTop:'2%',
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1
    }
  }
})
