import { React, useState } from 'react'
import { StyleSheet, ImageBackground, Image, TouchableOpacity,
  View, Text } from 'react-native';
import InputContainer from '../components/inputContainer';
import TextInput from '../components/TextInput';
import Header from '../components/Header';
import Background from '../components/Background';
import { RadioButton } from 'react-native-paper'; 
import Logo from '../components/Logo';
import { emailValidator } from '../helpers/emailValidator.js'
import { passwordValidator } from '../helpers/passwordValidator.js'
import { CheckBox } from '@rneui/themed';
import { Button } from '@rneui/themed'

export default function RegisterScreen({ navigation }) {
  const [checked, setChecked] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })

  const onLoginPressed = () => {
    const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)
    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      return
    }
    navigation.navigate("MainScreen")
  }

  return (
    <Background>
      <Logo />
      <Header>Create Account</Header>
      <InputContainer>
        <Text style={styles.text}>Name</Text>
        <Text style={styles.text}>Email</Text>
        <Image source={require('../assets/user_icon.png')}/>
        <TextInput placeholder="Enter name..."/>
        <TextInput placeholder="Enter email..."/>

        <Image source={require('../assets/country_icon.png')}/>
        <TextInput placeholder="Choose Country"/>
        <TextInput placeholder="Choose Date"/>

        <Image source={require('../assets/gender_icon.png')}/>
        <Text style={styles.text}>Gender</Text>
        <RadioButton.Android
          value="first"
          status={ checked === 'first' ? 'checked' : 'unchecked' }
          onPress={() => setChecked('first')}
          color="#ffce1f"/>
        <Text style={styles.text}>Male</Text>
        <RadioButton.Android
          value="second"
          status={ checked === 'second' ? 'checked' : 'unchecked' }
          onPress={() => setChecked('second')}
          color="#ffce1f"/>
        <Text style={styles.text}>Female</Text>

        <Image source={require('../assets/lock_icon.png')}/>
        <TextInput
          placeholder="Password"
          label="Password"
          returnKeyType="done"
          value={password.value}
          onChangeText={(text) => setPassword({ value: text, error: '' })}
          error={!!password.error}
          errorText={password.error}
          secureTextEntry
        />
      </InputContainer>

      <Button title="Continue"
              buttonStyle={{
                backgroundColor: '#ffce1f',
                borderRadius: 5,
              }}
              titleStyle={{color:'black'}}
              onPress={() => navigation.navigate('UsernameScreen')}/>
        <View style={styles.row}>
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={styles.text}>Have an account? Sign in</Text>
        </TouchableOpacity>
        </View>
    </Background>
  )
}

const styles = StyleSheet.create({
  text: {
    color: "#ffce1f",
  }
});
