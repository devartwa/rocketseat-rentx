import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';

export const Container = styled(RectButton)`
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