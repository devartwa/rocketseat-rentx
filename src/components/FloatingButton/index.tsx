import React from 'react';
import { RectButtonProps, PanGestureHandler } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedGestureHandler,
  withSpring
} from 'react-native-reanimated';

import {
  AnimatedContainer,
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

  const positionY = useSharedValue(0);
  const positionX = useSharedValue(0);

  const animatedStyleButton = useAnimatedStyle(() => {
    return {
      transform: [
        { translateY: positionY.value },
        { translateX: positionX.value },
      ]
    }
  });

  const onGestureEvent = useAnimatedGestureHandler({
    onStart: (_, ctx: any) => {
      ctx.startY = positionY.value;
      ctx.startX = positionX.value;
    },
    onActive: (event, ctx: any) => {
      positionY.value = ctx.startY + event.translationY;
      positionX.value = ctx.startX + event.translationX;
    },
    onEnd: () => {
      positionX.value = withSpring(0);
      positionY.value = withSpring(0);
    },
  });

  return (
    <PanGestureHandler onGestureEvent={onGestureEvent}>
      <AnimatedContainer style={[animatedStyleButton]}>
        <Container {...rest}>
          <Ionicons name={iconName} size={size} color={color} />
        </Container>
      </AnimatedContainer>
    </PanGestureHandler>
  );
};