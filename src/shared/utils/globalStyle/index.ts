import {Dimensions, FlexAlignType, PixelRatio} from 'react-native';
import {hp, wp} from '../responsive';

const screenHeight: number = Dimensions.get('screen').height;

interface CenterContent {
  flex: number;
  alignItems: FlexAlignType | undefined;
}

export const centerContent: CenterContent = {
  flex: 1,
  alignItems: 'center',
};

interface ContentCenterVertically {
  flexDirection:
    | 'column'
    | 'row'
    | 'row-reverse'
    | 'column-reverse'
    | undefined;
  justifyContent:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | undefined;
  alignItems: FlexAlignType | undefined;
}

export const centerContentVertically: ContentCenterVertically = {
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

export const centerContentHorizontally: ContentCenterVertically = {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
};

interface PerfectRadius {
  borderRadius: number;
}

export const perfectRadius: PerfectRadius = {
  borderRadius: Math.round(screenHeight + screenHeight) / PixelRatio.get(),
};

export const getPerfectRadius = (num: number) => {
  const numberToUse = num / hp(926);
  return {
    height: numberToUse * screenHeight,
    width: numberToUse * screenHeight,
    ...perfectRadius,
  };
};

interface IImageNav {
  width: number | undefined;
  height: number;
  resizeMode: string;
}

export const imageNav: IImageNav = {
  width: wp(24.61),
  height: hp(30),
  resizeMode: 'contain',
};
