import React, {useRef, useState} from 'react';
import {colors} from '../../../assets/colors';
import {hp} from '../responsive';
import {Animated} from 'react-native';

export const useInputFocus = () => {
  const [inputContainerStyle, setInputContainerStyle] = useState<{
    borderWidth: number;
    borderColor: string | null;
  }>({
    borderWidth: 0,
    borderColor: null,
  });

  const [inputStyle, setInputStyle] = useState({
    placeholder: true,
    inputStyle: {
      height: hp(56),
    },
  });
  const ref = useRef() as any;
  const translateUp = useRef(new Animated.Value(hp(30))).current;

  const onFocused = () => {
    if (ref?.current?.isFocused()) {
      setInputContainerStyle({
        borderColor: colors.primaryColor,
        borderWidth: 1,
      });
      setInputStyle({
        placeholder: false,
        inputStyle: {
          height: hp(22),
        },
      });
      Animated.timing(translateUp, {
        duration: 1000,
        toValue: hp(20),
        useNativeDriver: false,
      }).start(() => {});
    } else {
      setInputContainerStyle({
        borderColor: null,
        borderWidth: 0,
      });
      Animated.timing(translateUp, {
        duration: 100,
        toValue: hp(30),
        useNativeDriver: false,
      }).start(() => {
        setInputStyle({
          placeholder: true,
          inputStyle: {
            height: hp(56),
          },
        });
      });
    }
  };

  return {
    inputContainerStyle: inputContainerStyle,
    setInputContainerStyle: setInputContainerStyle,
    ref: ref,
    onFocused: onFocused,
    translateUp: translateUp,
    inputStyle,
  };
};
