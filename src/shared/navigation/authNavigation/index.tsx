import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CONSTANTS} from '../../constants';
import LoginScreen from '../../../screens/login';
import LoginFormScreen from '../../../screens/loginForm';

const Stack = createNativeStackNavigator();
const AuthNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name={CONSTANTS.LOGIN_SCREEN}
        component={LoginScreen}
      />
      <Stack.Screen
        name={CONSTANTS.LOGIN_SCREEN_FORM}
        component={LoginFormScreen}
        options={{
          presentation: 'modal',
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
