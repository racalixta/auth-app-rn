import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { MyButton } from '../components/MyButton';
import { useNavigation } from '@react-navigation/native';
import { StackNavigation } from '../routes/AppStack';

export function HomeScreen() {
  const navigation = useNavigation<StackNavigation>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Essa tela só pode ser vista por usuários autenticados</Text>

      <MyButton 
        onPress={() => navigation.navigate('Settings')} 
        title='Ir para Configurações' 
      />

      <Text>
        by <Text style={styles.coffText}>Rafael Calixta</Text>
      </Text>

    </View>
  );
}
