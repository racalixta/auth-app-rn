import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppStack } from './AppStack';
import { AuthStack } from './AuthStack';

function App() {
  const auth = false;

  return (
    <NavigationContainer>
      { auth ? <AppStack /> : <AuthStack /> }
    </NavigationContainer>
  );
}

export default App;