import { React, useState } from 'react'
import { StyleSheet, ImageBackground, Image, Text, View } from 'react-native';
import InputContainer from '../components/inputContainer';
import TextInput from '../components/TextInput';
import Header from '../components/Header';
import Background from '../components/Background';
import Logo from '../components/Logo';
import { Button, Input } from '@rneui/themed'


export default function MainScreen({ navigation }) {
  return (
    <Background>
      <Logo/>
      <View style={styles.container}>
        <Image source={require('../assets/colorPalette.png')}
            style={{
                resizeMode:'contain',
                height: '100%',
                width: '100%',
            }}
        />
        <Text>Colors</Text>
      </View>
      <View style={{flex:1, flexDirection: 'row', alignItems: 'center', marginVertical:30}}>
        <View style={{flex: 1, height: 1, backgroundColor: 'white'}} />
      </View>
    </Background>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 3,
        width: '100%',
        height: '100%',
        borderRadius: 10,
        justifyContent: 'center',
        backgroundColor: 'rgb(204,204,204)',
    }
});
