import React from 'react'
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import InputContainer from '../components/inputContainer.js'
import TextInput from '../components/TextInput.js'
import { emailValidator } from '../helpers/emailValidator.js'
import { passwordValidator } from '../helpers/passwordValidator.js'
import { Button, Input, Icon } from '@rneui/themed'

export default function LoginScreen({ navigation }) {
  return (
    <Background>
      <Header />
      <Text style={styles.title}>Sign In</Text>
      <InputContainer>
        <Input
          placeholder='Enter Email'
          returnKeyType="next"
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCompleteType="email"
          leftIcon={{ type: 'font-awesome', name: 'user', color:'#ffce1f'}}
        />
        <Input
          placeholder='Password'
          returnKeyType="done"
          secureTextEntry
          leftIcon={{ type: 'font-awesome', name: 'lock', color:'#ffce1f'}}
        />
      </InputContainer>
      <Button title="Sign in"
        buttonStyle={{
        backgroundColor: '#ffce1f',
        borderRadius: 100,
        width:125,
        marginTop:100
        }}
        titleStyle={{color:'black'}}
        onPress={() => navigation.navigate('MainScreen')}
      />
      <View style={styles.row}>
        <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
          <Text style={styles.newUser}>New user? Create account</Text>
        </TouchableOpacity>
      </View>
      </Background>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffce1f',
    textAlign: 'center',
    margin: 10,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  newUser: {
    color:"#ffce1f",
    textDecorationLine: 'underline'
  },
})