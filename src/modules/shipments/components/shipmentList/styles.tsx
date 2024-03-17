import {StyleSheet} from 'react-native';
import {hp, wp} from '../../../../shared/utils/responsive';

export default StyleSheet.create({
  container: {},
  listCon: {
    gap: hp(8),
    paddingBottom: hp(20),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  markAll: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp(5),
  },
});
