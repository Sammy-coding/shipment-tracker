import {StyleSheet} from 'react-native';
import {getPerfectRadius} from '../../../../shared/utils/globalStyle';
import {wp} from '../../../../shared/utils/responsive';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
  },
  imageContainer: {
    ...getPerfectRadius(40),
    resizeMode: 'contain',
  },
  button: {
    borderRadius: wp(10),
    flexDirection: 'row',
    justifyContent: 'center',
    gap: wp(5),
  },
});
