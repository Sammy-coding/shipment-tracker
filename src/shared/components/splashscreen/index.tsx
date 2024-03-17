import {Animated} from 'react-native';
import React, {useContext, useEffect, useRef} from 'react';
import Container from '../common/viewWrapper';
import styles from './styles';
import {hp, wp} from '../../utils/responsive';
import {SplashContext} from '../../../contexts/globalContext';

const SplashScreen = () => {
  const {setShowSplashScreen} = useContext(SplashContext);
  const firstScale = useRef(new Animated.Value(0)).current;
  const translateAndScale = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(firstScale, {
        duration: 2000,
        useNativeDriver: false,
        toValue: 1,
        delay: 500,
      }),
      Animated.timing(translateAndScale, {
        duration: 1000,
        useNativeDriver: false,
        toValue: 1,
        delay: 500,
      }),
    ]).start(() => setShowSplashScreen(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container style={styles.container}>
      <Animated.View
        style={{
          transform: [
            {
              scaleX: firstScale.interpolate({
                inputRange: [0, 1],
                outputRange: [1, 4],
              }),
            },
            {
              scaleY: firstScale.interpolate({
                inputRange: [0, 1],
                outputRange: [1, 4],
              }),
            },
          ],
        }}>
        <Animated.Image
          source={require('../../../assets/images/topLogo.png')}
          style={{
            width: wp(36.11),
            height: hp(11),
            resizeMode: 'contain',
            transform: [
              {
                translateY: translateAndScale.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, -200],
                }),
              },
              {
                scaleY: translateAndScale.interpolate({
                  inputRange: [0, 0.2, 0.4, 0.6, 0.8, 1],
                  outputRange: [1, 2, 10, 20, 40, 80],
                }),
              },
              {
                scaleX: translateAndScale.interpolate({
                  inputRange: [0, 0.2, 0.4, 0.6, 0.8, 1],
                  outputRange: [1, 2, 10, 20, 40, 80],
                }),
              },
            ],
          }}
        />
        <Animated.Image
          source={require('../../../assets/images/bottomlogo.png')}
          style={{
            width: wp(35.61),
            height: hp(22.79),
            resizeMode: 'contain',
            transform: [
              {
                translateY: translateAndScale.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, -240],
                }),
              },
              {
                scaleY: translateAndScale.interpolate({
                  inputRange: [0, 0.2, 0.4, 0.6, 0.8, 1],
                  outputRange: [1, 2, 10, 20, 40, 80],
                }),
              },
              {
                scaleX: translateAndScale.interpolate({
                  inputRange: [0, 0.2, 0.4, 0.6, 0.8, 1],
                  outputRange: [1, 2, 10, 20, 40, 80],
                }),
              },
            ],
          }}
        />
      </Animated.View>
    </Container>
  );
};

export default SplashScreen;
