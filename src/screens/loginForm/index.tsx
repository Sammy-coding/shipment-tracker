import React, {useEffect, useState} from 'react';
import Container from '../../shared/components/common/viewWrapper';
import LoginHeader from '../../modules/auth/components/loginHeader';
import LoginForm from '../../modules/auth/components/loginForm';
import {colors} from '../../assets/colors';
import styles from './styles';
import LoginButton from '../../modules/auth/components/loginButton';
import {useNavigation} from '@react-navigation/native';
import {login} from '../../modules/auth/store/actions/action.creator';
import {useAppDispatch, useAppSelector} from '../../shared/types/redux.types';
import Loader from '../../shared/components/common/customLoader';
import {isEmailValid, isPasswordValid} from '../../shared/utils/helpers';
import {Alert, KeyboardAvoidingView, Platform} from 'react-native';
import {hp} from '../../shared/utils/responsive';
import {clearError} from '../../modules/auth/store/reducer';

const LoginFormScreen = () => {
  const navigation = useNavigation();
  const {loading, error, isAuthFailure} = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();
  const [state, setState] = useState({
    url: '',
    password: '',
    username: '',
    validateError: {} as any,
  });

  useEffect(() => {
    if (isAuthFailure && error) {
      Alert.alert(error);
    }
    dispatch(clearError());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error, isAuthFailure]);

  const validateProperty = (name: string, value: string) => {
    if (name === 'username') {
      const message = isEmailValid(value);
      return message;
    }
    if (name === 'password') {
      const message = isPasswordValid(value);
      return message;
    }
  };

  const handlePress = () => {
    const passwordErrorMessage = validateProperty('password', state.password);
    const usernameErrorMessage = validateProperty('username', state.username);
    if (passwordErrorMessage) {
      Alert.alert(passwordErrorMessage);
      return;
    }

    if (usernameErrorMessage) {
      Alert.alert(usernameErrorMessage);
      return;
    }

    const data = {
      usr: state.username,
      pwd: state.password,
    };

    dispatch(login(data));
  };
  const handleChange = (text: string, name: string) => {
    const validateError = {...state.validateError};
    const errorMessage = validateProperty(name, text);
    if (errorMessage) {
      validateError[name] = errorMessage;
    } else {
      delete validateError[name];
    }

    setState({...state, [name]: text, validateError: validateError});
  };

  const handleClose = () => {
    navigation.goBack();
  };

  const isButtonDisabled = !state.url || !state.username || !state.password;

  return (
    <KeyboardAvoidingView
      // eslint-disable-next-line react-native/no-inline-styles
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? hp(64) : hp(-60)}>
      <Container pt={20} bg={colors.white} style={styles.container}>
        {loading && <Loader />}
        <LoginHeader onClose={handleClose} />
        <LoginForm
          usernameError={state.validateError['username']}
          passwordError={state.validateError['password']}
          url={state.url}
          password={state.password}
          onChange={handleChange}
          username={state.username}
        />
        <LoginButton
          isButtonDisabled={isButtonDisabled}
          onPress={handlePress}
          bg={colors.primaryColor}
          textColor={colors.white}
          title="Login"
        />
      </Container>
    </KeyboardAvoidingView>
  );
};

export default LoginFormScreen;
