import {ActivityIndicator} from 'react-native';
import React from 'react';
import Container from '../viewWrapper';
import styles from './styles';

const Loader = () => {
  return (
    <Container style={styles.container}>
      <ActivityIndicator size="large" />
    </Container>
  );
};

export default Loader;
