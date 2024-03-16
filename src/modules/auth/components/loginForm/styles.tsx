import {StyleSheet} from 'react-native';
import {hp, wp} from '../../../../shared/utils/responsive';
import {colors} from '../../../../assets/colors';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  outerContainer: {
    width: wp(361),
    height: hp(56),
    backgroundColor: colors.inputColor,
    borderRadius: wp(12),
    justifyContent: 'center',
  },
  inputContainer: {
    paddingHorizontal: wp(14),
  },
});
