import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ChatScreen from './components/ChatScreen';  // Adjust the path if needed
import ProductListScreen from './components/ProductListScreen';  // Adjust the path if needed

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ProductList">
        <Stack.Screen
          name="ProductList"
          component={ProductListScreen}
          options={{ headerShown: false }}  // Disable default header for ProductListScreen
        />
        <Stack.Screen
          name="Chat"
          component={ChatScreen}
          options={{ headerShown: false }}  // Disable default header for ChatScreen
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
