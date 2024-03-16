import {ColorValue, View, ViewProps} from 'react-native';
import React from 'react';
import {hp, wp} from '../../../utils/responsive';

interface Props extends ViewProps {
  wt?: number;
  ht?: number;
  mt?: number;
  mb?: number;
  pt?: number;
  pb?: number;
  mv?: number;
  mh?: number;
  ph?: number;
  pv?: number;
  pl?: number;
  pr?: number;
  style?: any;
  ml?: number;
  mr?: number;
  bg?: ColorValue | string;
}

const Container = (props: Props) => {
  const {
    style,
    wt,
    ht,
    mt,
    mb,
    pt,
    pb,
    mv,
    mh,
    ph,
    pv,
    pl,
    pr,
    ml,
    mr,
    bg,
    children,
  } = props;
  return (
    <View
      {...props}
      style={[
        {
          ...style,
          marginHorizontal: mh && wp(mh),
          marginBottom: mb && hp(mb),
          marginTop: mt && hp(mt),
          marginVertical: mv && hp(mv),
          paddingBottom: pb && hp(pb),
          paddingTop: pt && hp(pt),
          paddingHorizontal: ph && wp(ph),
          paddingVertical: pv && hp(pv),
          height: ht ? hp(ht) : style?.height ? style?.height : null,
          paddingLeft: pl && wp(pl),
          paddingRight: pr && wp(pr),
          width: wt ? wp(wt) : style?.width ? style?.width : null,
          marginLeft: ml && wp(ml),
          marginRight: mr && wp(mr),
          backgroundColor: bg
            ? bg
            : style?.backgroundColor
            ? style?.backgroundColor
            : null,
        },
      ]}>
      {children}
    </View>
  );
};

export default Container;
