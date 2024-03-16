import {StyleSheet} from 'react-native';
import {wp} from '../../../utils/responsive';
import {centerContentVertically} from '../../../utils/globalStyle';

export default StyleSheet.create({
  button: {
    ...centerContentVertically,
  },
  smallButton: {
    width: wp(120),
    borderRadius: 10,
  },
  bigButton: {
    width: wp(360),
    borderRadius: 10,
  },
});
