import {StyleSheet} from 'react-native';
import {getPerfectRadius} from '../../../../shared/utils/globalStyle';
import {hp, wp} from '../../../../shared/utils/responsive';
import {colors} from '../../../../assets/colors';

export default StyleSheet.create({
  container: {},
  imageContainer: {
    ...getPerfectRadius(40),
    resizeMode: 'contain',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  logoContainer: {
    width: wp(92.28),
    height: hp(16),
    resizeMode: 'contain',
  },
  bellCon: {
    width: wp(24),
    height: hp(24),
    resizeMode: 'contain',
  },
  inputCon: {
    width: wp(361),
    paddingHorizontal: wp(14),
    backgroundColor: colors.inputColor,
    borderRadius: wp(10),
  },
  bell: {
    backgroundColor: colors.inputColor,
    padding: hp(5),
    borderRadius: hp(50),
  },
});
