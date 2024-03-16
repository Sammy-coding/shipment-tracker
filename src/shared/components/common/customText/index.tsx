import {Text, TextProps} from 'react-native';
import React from 'react';
import {hp, wp} from '../../../utils/responsive';

interface Props extends TextProps {
  style?: any;
  children?: string | React.ReactNode;
  color?: string;
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
  fw?: string;
  fs?: number;
  ta?: string;
}

const AText = (props: Props) => {
  const {
    style,
    children,
    color,
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
    fw,
    fs,
    ta,
  } = props;
  return (
    <Text
      {...props}
      style={[
        // eslint-disable-next-line react-native/no-inline-styles
        {
          ...style,
          color: style?.color ? style.color : color ? color : null,
          marginHorizontal: style?.marginHorizontal
            ? style.marginHorizontal
            : mh
            ? wp(mh)
            : null,
          marginBottom: style?.marginBottom
            ? style.marginBottom
            : mb
            ? hp(mb)
            : null,
          marginTop: style?.marginTop ? style.marginTop : mt ? hp(mt) : null,
          marginVertical: mv && hp(mv),
          paddingBottom: pb && hp(pb),
          paddingTop: pt && hp(pt),
          paddingHorizontal: ph && wp(ph),
          paddingVertical: pv && hp(pv),
          height: ht && hp(ht),
          paddingLeft: style?.paddingLeft
            ? style.paddiingLeft
            : pl
            ? wp(pl)
            : null,
          paddingRight: pr && wp(pr),
          width: wt && wp(wt),
          fontWeight: style?.fontWeight ? style.fontWeight : fw ? fw : 'normal',
          fontSize: style?.fontSize ? style.fontSize : fs ? hp(fs) : hp(14),
          textAlign: ta ? ta : 'center',
        },
      ]}>
      {children}
    </Text>
  );
};

export default AText;
