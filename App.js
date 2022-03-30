import { StatusBar } from 'expo-status-bar';
import React from 'react'
import Routes from './src/routes/index';
import AuthProvider from './src/contexts/auth'

import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'

console.disableYellowBox=true

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar style='light' />
        <Routes/>
      </AuthProvider>
    </NavigationContainer>
  );
}
