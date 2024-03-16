import {FlexAlignType} from 'react-native';

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
