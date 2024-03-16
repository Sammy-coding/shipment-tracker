import {StyleSheet} from 'react-native';
import {colors} from '../../assets/colors';
import {centerContentVertically} from '../../shared/utils/globalStyle';
import {hp, wp} from '../../shared/utils/responsive';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryColor,
    ...centerContentVertically,
  },
  logo: {
    width: wp(207.63),
    height: hp(36),
    resizeMode: 'contain',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: hp(32),
  },
});
