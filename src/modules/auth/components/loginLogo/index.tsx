import {Image} from 'react-native';
import React from 'react';
import Container from '../../../../shared/components/common/viewWrapper';
import styles from './styles';

const LoginLogo = () => {
  return (
    <Container>
      <Image
        source={require('../../../../assets/images/shippex.png')}
        style={styles.logo}
      />
    </Container>
  );
};

export default LoginLogo;
