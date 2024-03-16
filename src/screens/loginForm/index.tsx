import React from 'react';
import Container from '../../shared/components/common/viewWrapper';
import LoginHeader from '../../modules/auth/components/loginHeader';
import LoginForm from '../../modules/auth/components/loginForm';
import {colors} from '../../assets/colors';
import styles from './styles';
import LoginButton from '../../modules/auth/components/loginButton';

const LoginFormScreen = () => {
  const handlePress = () => {};
  return (
    <Container pt={20} bg={colors.white} style={styles.container}>
      <LoginHeader />
      <LoginForm />
      <LoginButton
        onPress={handlePress}
        bg={colors.primaryColor}
        textColor={colors.white}
        title="Login"
      />
    </Container>
  );
};

export default LoginFormScreen;
