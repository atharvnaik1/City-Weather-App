
import React from 'react';
import type {PropsWithChildren} from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './screens/Home';
import Search from './screens/Search' ;
const Stack = createNativeStackNavigator();
const App = () => {
  return (
   <NavigationContainer>
     <Stack.Navigator screenOptions={{ headerShown: false }}>
     <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Search' component={Search} />
     </Stack.Navigator>
   </NavigationContainer>  
  );};
export default App;
