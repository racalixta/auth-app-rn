import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { MyButton } from '../components/MyButton';

export function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Essa tela só pode ser vista por usuários autenticados</Text>

      <MyButton title='Ir para Configurações' />

      <Text>
        by <Text style={styles.coffText}>Rafael Calixta</Text>
      </Text>

    </View>
  );
}
