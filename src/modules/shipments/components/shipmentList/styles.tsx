import {StyleSheet} from 'react-native';
import {hp, wp} from '../../../../shared/utils/responsive';

export default StyleSheet.create({
  container: {},
  listCon: {
    gap: hp(12),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // width: 361
  },
  markAll: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp(5),
  },
});
