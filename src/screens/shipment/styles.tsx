import {StyleSheet} from 'react-native';
import {centerContent} from '../../shared/utils/globalStyle';
import {wp} from '../../shared/utils/responsive';
import {colors} from '../../assets/colors';

export default StyleSheet.create({
  container: {
    ...centerContent,
    paddingHorizontal: wp(16),
    backgroundColor: colors.white,
    flex: 1,
  },
});
