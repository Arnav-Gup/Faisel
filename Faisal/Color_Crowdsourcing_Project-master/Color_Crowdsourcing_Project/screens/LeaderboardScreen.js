import React from 'react'
import { StyleSheet, ImageBackground, Button, View, Text } from 'react-native';
import bg from '../assets/background.png'

export default function LeaderboardScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={bg} style={styles.container}>
        <Text style={styles.text}>Register Screen</Text>
        <Button style={styles.text}
        onPress={() => navigation.navigate('LoginScreen')}
        title="Login"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
        />
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent:"center",
    flex:1
  },
  text: {
    textAlign: 'center'
  }
});
