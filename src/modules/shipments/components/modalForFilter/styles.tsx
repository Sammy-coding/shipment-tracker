import {StyleSheet} from 'react-native';
import {colors} from '../../../../assets/colors';
import {hp, wp} from '../../../../shared/utils/responsive';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    alignItems: 'center',
    borderTopLeftRadius: wp(20),
    borderTopRightRadius: wp(20),
  },
  headerCon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: colors.borderColor,
  },
  grabber: {
    width: wp(36),
    height: hp(5),
    resizeMode: 'contain',
  },
  title: {
    width: '100%',
  },
  statusList: {
    paddingHorizontal: wp(24),
    width: '100%',
    justifyContent: 'space-between',
    gap: hp(10),
  },
});
