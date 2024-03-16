import React from 'react';
import Container from '../../../../shared/components/common/viewWrapper';
import CustomButton from '../../../../shared/components/common/customButton';
import styles from './styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {hp} from '../../../../shared/utils/responsive';
import {colors} from '../../../../assets/colors';
import AText from '../../../../shared/components/common/customText';

interface Props {
  onPress?: () => void;
  bg?: string;
  title?: string;
  textColor?: string;
}

const LoginButton = (props: Props) => {
  const {onPress, bg, title, textColor} = props;
  const inset = useSafeAreaInsets();
  return (
    <Container
      style={{...styles.buttonContainer, bottom: hp(32) + inset.bottom}}>
      <CustomButton onPress={onPress} bg={bg}>
        <AText fw="600" fs={17} color={textColor}>
          {title}
        </AText>
      </CustomButton>
    </Container>
  );
};

export default LoginButton;
