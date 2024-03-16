import React, {useState} from 'react';
import Container from '../../shared/components/common/viewWrapper';
import LoginHeader from '../../modules/auth/components/loginHeader';
import LoginForm from '../../modules/auth/components/loginForm';
import {colors} from '../../assets/colors';
import styles from './styles';
import LoginButton from '../../modules/auth/components/loginButton';
import {useNavigation} from '@react-navigation/native';
import {login} from '../../modules/auth/store/actions/action.creator';
import {useAppDispatch, useAppSelector} from '../../shared/types/redux.types';
import {ActivityIndicator} from 'react-native';
import Loader from '../../shared/components/common/customLoader';

const LoginFormScreen = () => {
  const navigation = useNavigation();
  const {loading} = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();
  const [state, setState] = useState({
    url: '',
    password: '',
    username: '',
    validateError: {},
  });

  const validateProperty = () => {};

  const handlePress = () => {
    const data = {
      usr: state.username,
      pwd: state.password,
    };

    dispatch(login(data));
  };
  const handleChange = (text: string, name: string) => {
    setState({...state, [name]: text});
  };

  const handleClose = () => {
    navigation.goBack();
  };

  const isButtonDisabled = !state.url || !state.username || !state.password;

  return (
    <Container pt={20} bg={colors.white} style={styles.container}>
      {loading && <Loader />}
      <LoginHeader onClose={handleClose} />
      <LoginForm
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
  );
};

export default LoginFormScreen;
