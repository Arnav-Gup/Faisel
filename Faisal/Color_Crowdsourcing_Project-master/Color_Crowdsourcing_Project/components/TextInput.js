import React from 'react'
import { View, StyleSheet, Text, TextInput as Input } from 'react-native'

export default function TextInput({ errorText, description, ...props }) {
  return (
    <View style={styles.container}>
      <Input
        style={styles.input}
        underlineColor="transparent"
        mode="outlined"
        {...props}
      />
      {description && !errorText ? (
        <Text style={styles.description}>{description}</Text>
      ) : null}
      {errorText ? <Text style={styles.error}>{errorText}</Text> : null}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '80%',
    marginVertical: 15,
    marginHorizontal:10
  },
  input: {
    backgroundColor:'white',
    borderRadius:5,
  },
  description: {
    fontSize: 13,
    paddingTop: 8,
  },
  error: {
    fontSize: 13,
    paddingTop: 8,
  },
})
