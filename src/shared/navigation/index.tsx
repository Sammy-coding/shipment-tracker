import {NavigationContainer as Navigation} from '@react-navigation/native';
import React, {useContext} from 'react';
import AuthNavigation from './authNavigation';
import AppNavigation from './appNavigation';
import {useAppSelector} from '../types/redux.types';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CONSTANTS} from '../constants';
import SplashScreen from '../components/splashscreen';
import {SplashContext} from '../../contexts/globalContext';

const Stack = createNativeStackNavigator();

const NavigationContainer = () => {
  const {showSplashScreen} = useContext(SplashContext);
  const {isAuthSuccess} = useAppSelector(state => state.auth);

  return (
    <Navigation>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {showSplashScreen ? (
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
