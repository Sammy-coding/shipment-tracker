import React from 'react';
import Container from '../../shared/components/common/viewWrapper';
import styles from './styles';
import LoginLogo from '../../modules/auth/components/loginLogo';
import LoginButton from '../../modules/auth/components/loginButton';
import {useNavigation} from '@react-navigation/native';
import {CONSTANTS} from '../../shared/constants';
import {colors} from '../../assets/colors';

const LoginScreen = () => {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate(CONSTANTS.LOGIN_SCREEN_FORM as never);
  };
  return (
    <Container style={styles.container}>
      <LoginLogo />
      <LoginButton onPress={handlePress} bg={colors.white} title="Login" />
    </Container>
  );
};

export default LoginScreen;
