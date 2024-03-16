import {StyleSheet} from 'react-native';
import {colors} from '../../../../assets/colors';
import {hp, wp} from '../../../../shared/utils/responsive';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.inputColor,
    borderRadius: hp(10),
    paddingVertical: hp(9),
    paddingHorizontal: wp(14),
  },
});
