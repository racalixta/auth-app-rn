import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { MyButton } from '../components/MyButton';

export function SettingScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configurações</Text>

      <MyButton style={{backgroundColor: "red"}} title="Sair do App" />
    </View>
  );
}
