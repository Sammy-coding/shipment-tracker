import {Pressable, PressableProps} from 'react-native';
import React from 'react';
import {colors} from '../../../../assets/colors';
import {hp, wp} from '../../../utils/responsive';
import styles from './styles';

interface Props extends PressableProps {
  children?: any;
  style?: any;
  size?: any;
  ht?: number;
  mt?: number;
  mb?: number;
  pt?: number;
  pb?: number;
  mv?: number;
  mh?: number;
  ph?: number;
  pv?: number;
  pr?: number;
  pl?: number;
  bg?: string;
  wt?: number;
}

const CustomButton = (props: Props) => {
  const {
    children,
    style,
    size,
    ht,
    mt,
    mb,
    pt,
    pb,
    mv,
    mh,
    ph,
    pv,
    pr,
    pl,
    bg,
    wt,
  } = props;
  return (
    <Pressable
      {...props}
      style={[
        styles.button,
        size === 'small' ? styles.smallButton : styles.bigButton,
        {
          ...style,
          backgroundColor: bg ? bg : colors.primaryColor,
          marginHorizontal: mh && wp(mh),
          marginBottom: mb && hp(mb),
          marginTop: mt && hp(mt),
          marginVertical: mv && hp(mv),
          paddingBottom: pb && hp(pb),
          paddingTop: pt && hp(pt),
          paddingHorizontal: ph && wp(ph),
          paddingVertical: pv && hp(pv),
          height: ht ? hp(ht) : hp(60),
          paddingLeft: pl && wp(pl),
          paddingRight: pr && wp(pr),
          width: wt
            ? wp(wt)
            : style?.width
            ? style.width
            : size === 'small'
            ? styles?.smallButton.width
            : styles?.bigButton.width,
        },
      ]}>
      {children}
    </Pressable>
  );
};

export default CustomButton;
