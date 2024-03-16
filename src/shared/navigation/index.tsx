import {NavigationContainer as Navigation} from '@react-navigation/native';
import React, {useState} from 'react';
import AuthNavigation from './authNavigation';
import AppNavigation from './appNavigation';

const NavigationContainer = () => {
  const [state, setState] = useState({
    showSplashScreen: true,
  });
  return (
    <Navigation>
      {state.showSplashScreen ? <AuthNavigation /> : <AppNavigation />}
    </Navigation>
  );
};

export default NavigationContainer;
