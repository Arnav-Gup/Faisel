import { React, useState } from 'react'
import { StyleSheet, ImageBackground, Image, Text, View } from 'react-native';
import InputContainer from '../components/inputContainer';
import TextInput from '../components/TextInput';
import Header from '../components/Header';
import Background from '../components/Background';
import Logo from '../components/Logo';
import { Button, Input } from '@rneui/themed'
import ColorContainer from '../components/ColorContainer'

export default function MainScreen({ navigation }) {
  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }
  const colors = JSON.parse(JSON.stringify(require('../components/color_info.json')))
  const [color, setColor] = useState(colors[getRndInteger(1,789)].Hex);

  const changeColor = () => { setColor(colors[getRndInteger(1,789)].Hex) }
  return (
    <Background>
      <Logo/>
      <ColorContainer elevation={2} color={color}/>
      <View style={{flexDirection: 'row', alignItems: 'center', marginVertical:30}}>
        <View style={{flex: 1, height: 1, backgroundColor: 'white'}} />
      </View>
      <InputContainer>
        <Header>Enter the color name shown above</Header>
        <Input /> 
        <Button title="Skip this color" onPress={changeColor}/>
        <Button title="Next" onPress={changeColor}/>
      </InputContainer>
    </Background>
  )
}

const styles = StyleSheet.create({
});
