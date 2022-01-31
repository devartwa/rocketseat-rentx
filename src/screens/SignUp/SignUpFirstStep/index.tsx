import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { MainParamList } from '../../../@types';

import { Container } from './styles';

type SignUpFirstStepNavigationProp = StackNavigationProp<MainParamList, 'SignUpFirstStep'>;
type SignUpFirstStepProps = { navigation: SignUpFirstStepNavigationProp };

export function SignUpFirstStep({ navigation }: SignUpFirstStepProps) {
  return (
    <Container>

    </Container>
  );
};