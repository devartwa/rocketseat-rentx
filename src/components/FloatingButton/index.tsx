import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

import {
  Container
} from './styles';

interface Props extends RectButtonProps {
  iconName: any;
  size: number;
  color: string;
}

export function FloatingButton({
  iconName,
  size,
  color,
  ...rest
}: Props) {

  return (
    <Container {...rest}>
      <Ionicons name={iconName} size={size} color={color} />
    </Container>
  );
};