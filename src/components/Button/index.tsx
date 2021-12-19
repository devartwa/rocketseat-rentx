import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import {
  Container,
  Title,
} from './styles';

interface Props extends RectButtonProps {
  title: string | JSX.Element;
  color?: string;
  enabled?: boolean;
}

export function Button({
  title,
  color,
  enabled = true,
  ...rest }: Props) {
  return (
    <Container enabled={enabled} {...rest} color={color}>
      <Title>{title}</Title>
    </Container>
  );
};