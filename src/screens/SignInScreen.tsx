import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { styles } from './styles';
import { MyTextInput } from '../components/MyTextInput';
import { MyButton } from '../components/MyButton';

export function SignInScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={[styles.container, { justifyContent: "center"}]}>
      <MyTextInput placeholder='e-mail' value={email} onChangeText={setEmail} />
      <MyTextInput 
        secureTextEntry
        placeholder='senha' 
        value={password} 
        onChangeText={setPassword} 
      />

      <MyButton title='Entrar no App' />
    </View>
  );
}
