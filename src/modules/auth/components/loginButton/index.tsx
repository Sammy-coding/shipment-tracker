import React from 'react';
import Container from '../../../../shared/components/common/viewWrapper';
import CustomButton from '../../../../shared/components/common/customButton';
import styles from './styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {hp} from '../../../../shared/utils/responsive';
import AText from '../../../../shared/components/common/customText';
import {colors} from '../../../../assets/colors';

interface Props {
  onPress?: () => void;
  bg?: string;
  title?: string;
  textColor?: string;
  isButtonDisabled?: boolean;
}

const LoginButton = (props: Props) => {
  const {onPress, bg, title, textColor, isButtonDisabled = false} = props;
  const inset = useSafeAreaInsets();
  return (
    <Container
      style={{...styles.buttonContainer, bottom: hp(32) + inset.bottom}}>
      <CustomButton
        disabled={isButtonDisabled}
        onPress={onPress}
        bg={isButtonDisabled ? colors.disabledBGColor : bg}>
        <AText
          fw="600"
          fs={17}
          color={isButtonDisabled ? colors.disabledTextColor : textColor}>
          {title}
        </AText>
      </CustomButton>
    </Container>
  );
};

export default LoginButton;
