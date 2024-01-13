import React, { useState } from 'react'
import { TouchableOpacity, ImageBackground, StyleSheet, View, Text, Image, KeyboardAvoidingView } from 'react-native'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import InputContainer from '../components/inputContainer.js'
import TextInput from '../components/TextInput.js'
import { emailValidator } from '../helpers/emailValidator.js'
import { passwordValidator } from '../helpers/passwordValidator.js'
import { Button } from '@rneui/themed'

export default function UsernameScreen({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header>Username Selection</Header>
      <InputContainer>
        <TextInput
          placeholder="Enter Username"
        />
      </InputContainer>
      <Button title="Create"
              buttonStyle={{
                backgroundColor: '#ffce1f',
                borderRadius: 5,
              }}
              titleStyle={{color:'black'}}
              onPress={() => navigation.navigate('LandingScreen')}/>
      </Background>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent:"center",
    alignItems:'center',
    flex:1
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    color:"#ffce1f",
  },
})