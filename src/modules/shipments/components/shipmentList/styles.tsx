import {StyleSheet} from 'react-native';
import {hp, wp} from '../../../../shared/utils/responsive';

export default StyleSheet.create({
  container: {},
  listCon: {
    gap: hp(8),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  markAll: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp(5),
  },
});
