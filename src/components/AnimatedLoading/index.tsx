import React from 'react';
import LottieView from 'lottie-react-native';
import { Container } from './styles';

export function AnimatedLoading() {
  return (
    <Container>
      <LottieView
        source={require('../../assets/animations/loading.json')}
        style={{ width: 150, height: 150 }}
        resizeMode='contain'
        autoPlay
        loop
      />
    </Container>
  );
};