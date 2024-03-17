import {TouchableOpacity} from 'react-native';
import React from 'react';
import Container from '../../../../shared/components/common/viewWrapper';
import AText from '../../../../shared/components/common/customText';
import styles from './styles';
import {colors} from '../../../../assets/colors';
import Icons from '../../../../assets/icons';

interface Props {
  onClose: () => void;
}

const LoginHeader = (props: Props) => {
  const {onClose} = props;
  return (
    <Container mh={16} style={styles.container}>
      <TouchableOpacity onPress={onClose} style={styles.backButton}>
        <Icons name="left" iconName="Ant" color={colors.cancelColor} />
        <AText fs={17} color={colors.cancelColor}>
          Cancel
        </AText>
      </TouchableOpacity>
      <Container mt={15}>
        <AText fs={34} fw="500" ta="left">
          Login
        </AText>
      </Container>
      <Container mt={5}>
        <AText ta="left" fs={17} fw="400" color={colors.greyColor}>
          Please enter your First, Last name and your phone number in order to
          register
        </AText>
      </Container>
    </Container>
  );
};

export default LoginHeader;
