import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {CONSTANTS} from '../../../constants';
import ShippmentScreen from '../../../../screens/shipment';

const Stack = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={CONSTANTS.SHIPPMENT_SCREEN}
        component={ShippmentScreen}
        options={({navigation}) => {}}
      />
    </Stack.Navigator>
  );
};

export default BottomNavigation;
