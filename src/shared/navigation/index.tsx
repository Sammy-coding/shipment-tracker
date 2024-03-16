import {NavigationContainer as Navigation} from '@react-navigation/native';
import React, {useState} from 'react';
import AuthNavigation from './authNavigation';
import AppNavigation from './appNavigation';
import {useAppSelector} from '../types/redux.types';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CONSTANTS} from '../constants';
import SplashScreen from '../components/splashscreen';

const Stack = createNativeStackNavigator();

const NavigationContainer = () => {
  const [stat, setStat] = useState({
    showSplashScreen: false,
  });
  const {isAuthSuccess, data, error} = useAppSelector(state => state.auth);
  console.log(data);

  return (
    <Navigation>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {stat.showSplashScreen ? (
          <Stack.Group>
            <Stack.Screen
              name={CONSTANTS.SPLASH_SCREEN}
              component={SplashScreen}
            />
          </Stack.Group>
        ) : !isAuthSuccess ? (
          <Stack.Group>
            <Stack.Screen name="Auth" component={AuthNavigation} />
          </Stack.Group>
        ) : (
          <Stack.Group>
            <Stack.Screen name="App" component={AppNavigation} />
          </Stack.Group>
        )}
      </Stack.Navigator>
    </Navigation>
  );
};

export default NavigationContainer;
