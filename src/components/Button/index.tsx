import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components';

import {
  Container,
  Loading,
  Title,
} from './styles';

interface Props extends RectButtonProps {
  title: string;
  color?: string;
  loading?: boolean;
  light?: boolean;
}

export function Button({
  title,
  color,
  onPress,
  enabled = true,
  loading = false,
  light = false
}: Props) {

  const theme = useTheme();

  return (
    <Container
      color={color ? color : theme.colors.main}
      enabled={enabled}
      onPress={onPress}
      light={light}
      style={{ opacity: (enabled === false || loading === true) ? 0.3 : 1 }}
    >
      {
        loading
          ? <Loading />
          : <Title light={light}>{title}</Title>
      }
    </Container>
  );
};