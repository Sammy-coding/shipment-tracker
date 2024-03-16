import {StyleSheet} from 'react-native';
import {wp} from '../../../../shared/utils/responsive';
import {colors} from '../../../../assets/colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.inputColor,
    width: wp(361),
    justifyContent: 'space-between',
  },
  packageImage: {
    width: wp(40),
    height: wp(40),
    resizeMode: 'contain',
  },
  address: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp(5),
  },
  details: {
    width: wp(131),
  },
});
