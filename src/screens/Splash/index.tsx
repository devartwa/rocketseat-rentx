import React from 'react';
import { StatusBar } from 'react-native';

import { Container } from './styles';

export function Splash() {
  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
    </Container>
  );
};