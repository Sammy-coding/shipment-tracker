import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {CONSTANTS} from '../../../constants';
import ShippmentScreen from '../../../../screens/shipment';
import {Image} from 'react-native';
import {hp, wp} from '../../../utils/responsive';
import ScanScreen from '../../../../screens/scanScreen';
import WalletScreen from '../../../../screens/walletScreen';
import ProfileScreen from '../../../../screens/profileScreen';

const Stack = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={CONSTANTS.SHIPPMENT_SCREEN}
        component={ShippmentScreen}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({focused}) => {
            return focused ? (
              <Image
                source={require('../../../../assets/images/boxes-icon1.png')}
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                  width: wp(24.61),
                  height: hp(30),
                  resizeMode: 'contain',
                }}
              />
            ) : (
              <Image
                source={require('../../../../assets/images/boxes-icon2.png')}
                style={{
                  width: wp(24.61),
                  height: hp(30),
                  resizeMode: 'contain',
                }}
              />
            );
          },
          tabBarLabel: 'Shipment',
        }}
      />
      <Stack.Screen
        name={CONSTANTS.SCAN_SCREEN}
        component={ScanScreen}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({focused}) => {
            return focused ? (
              <Image
                source={require('../../../../assets/images/selected-bar.png')}
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                  width: wp(24.61),
                  height: hp(30),
                  resizeMode: 'contain',
                }}
              />
            ) : (
              <Image
                source={require('../../../../assets/images/scanbottom.png')}
                style={{
                  width: wp(24.61),
                  height: hp(30),
                  resizeMode: 'contain',
                }}
              />
            );
          },
          tabBarLabel: 'Scan',
        }}
      />
      <Stack.Screen
        name={CONSTANTS.WALLET_SCREEN}
        component={WalletScreen}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({focused}) => {
            return focused ? (
              <Image
                source={require('../../../../assets/images/selected-wallet.png')}
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                  width: wp(24.61),
                  height: hp(30),
                  resizeMode: 'contain',
                }}
              />
            ) : (
              <Image
                source={require('../../../../assets/images/wallet-icon1.png')}
                style={{
                  width: wp(24.61),
                  height: hp(30),
                  resizeMode: 'contain',
                }}
              />
            );
          },
          tabBarLabel: 'Wallet',
        }}
      />
      <Stack.Screen
        name={CONSTANTS.PROFILE_SCREEN}
        component={ProfileScreen}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({focused}) => {
            return focused ? (
              <Image
                source={require('../../../../assets/images/selected-avatar.png')}
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                  width: wp(24.61),
                  height: hp(30),
                  resizeMode: 'contain',
                }}
              />
            ) : (
              <Image
                source={require('../../../../assets/images/avatar-icon.png')}
                style={{
                  width: wp(24.61),
                  height: hp(30),
                  resizeMode: 'contain',
                }}
              />
            );
          },
          tabBarLabel: 'Shipment',
        }}
      />
    </Stack.Navigator>
  );
};

export default BottomNavigation;
