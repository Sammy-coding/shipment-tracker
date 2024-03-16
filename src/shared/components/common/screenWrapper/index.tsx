import React from 'react';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {hp} from '../../../utils/responsive';

interface Props {
  children: React.ReactNode;
  style?: any;
  pt?: number;
  isBottomNav?: boolean;
}
const Screen = (props: Props) => {
  const {style, children, pt, isBottomNav = false} = props;
  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={[
          style,
          {
            paddingTop: pt
              ? hp(pt)
              : style?.paddingTop
              ? style?.paddingTop
              : hp(10),
            height: isBottomNav
              ? hp(926) - hp(100)
              : style?.height
              ? style?.height
              : '100%',
          },
        ]}>
        {children}
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Screen;
