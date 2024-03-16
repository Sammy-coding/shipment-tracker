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
    borderRadius: wp(10),
  },
  packageImage: {
    width: wp(40),
    height: wp(40),
    resizeMode: 'contain',
  },
  address: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp(8),
  },
  details: {
    // width: wp(121),
  },
  status: {
    borderRadius: wp(4),
    borderWidth: 1,
    borderColor: colors.white,
  },
  saltCon: {
    padding: wp(4),
    backgroundColor: colors.white,
    borderRadius: wp(50),
  },
  branchCon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  topBranch: {
    borderWidth: 3,
    borderStyle: 'dashed',
    borderColor: colors.white,
    borderBottomLeftRadius: wp(10),
      borderBottomRightRadius: wp(10),
  },
  buttons: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    gap: wp(10),
  },
});
