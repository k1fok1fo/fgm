import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainTabNavigator from './MainTabNavigator';
import AuthScreen from '../screens/AuthScreen';
import SuccessScreen from '../screens/SuccessScreen';
import { COLORS } from '../constants/colors';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: COLORS.BACKGROUND },
        headerTintColor: COLORS.TEXT,
        headerBackTitleVisible: false,
        animation: 'slide_from_right',
      }}
    >
      {/* 1. Экран авторизации теперь идет ПЕРВЫМ */}
      <Stack.Screen 
        name="Auth" 
        component={AuthScreen} 
        options={{ headerShown: false }} 
      />

      {/* 2. Главный экран с вкладками идет ВТОРЫМ */}
      <Stack.Screen 
        name="MainTabs" 
        component={MainTabNavigator} 
        options={{ headerShown: false }} 
      />
      
      {/* 3. Экран успеха */}
      <Stack.Screen 
        name="Success" 
        component={SuccessScreen} 
        options={{ title: 'Успех' }} 
      />
    </Stack.Navigator>
  );
}