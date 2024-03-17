/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import SplashScreen from 'react-native-splash-screen';
import NavigationContainer from './src/shared/navigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import store from './src/store';
import GlobalContext from './src/contexts/globalContext';

SplashScreen.hide();
function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <GlobalContext>
        <SafeAreaProvider style={{flex: 1}}>
          <NavigationContainer />
        </SafeAreaProvider>
      </GlobalContext>
    </Provider>
  );
}

export default App;
