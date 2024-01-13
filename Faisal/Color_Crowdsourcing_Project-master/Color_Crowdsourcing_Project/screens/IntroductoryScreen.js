import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Background from '../components/Background'
import Header from '../components/Header'
import { Button, ButtonGroup } from '@rneui/themed'


export default function IntroductoryScreen({ navigation }) {
  return (
    <Background>
        <Header />
        <View style={styles.container}>       
            <Text>
                Introductory Screen
            </Text>
            <Text>
                Introductory Screen
            </Text>
            <Button title="Sign in"
                buttonStyle={{
                backgroundColor: '#ffce1f',
                }}
                titleStyle={{color:'black'}}
                onPress={() => navigation.navigate('LoginScreen')}
            />
            <Button title="Sign up"
                type='outline'
                buttonStyle={{
                borderColor: '#ffce1f',
                width:'100%',
                }}
                titleStyle={{color:'black'}}
                onPress={() => navigation.navigate('RegisterScreen')}
            />
        </View>
    </Background>
  )
}

const styles = StyleSheet.create({
    container: {
        width:'100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})