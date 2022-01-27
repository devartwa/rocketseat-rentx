import styled from "styled-components/native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import Animated from "react-native-reanimated";
import { RectButton } from "react-native-gesture-handler";

const ButtonAnimated = Animated.createAnimatedComponent(RectButton);

export const AnimatedContainer = styled(Animated.View)``;

export const Container = styled(ButtonAnimated)`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  position: absolute;
  bottom: ${getBottomSpace() + 13}px;
  right: 22px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.main};
`;
