import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import BottomNavigation from './bottomNavigation';

const Stack = createNativeStackNavigator();
const AppNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="BottomNav" component={BottomNavigation} />
    </Stack.Navigator>
  );
};

export default AppNavigation;
