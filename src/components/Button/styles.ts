import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

interface ButtonProps extends RectButtonProps {
  color: string;
  enabled: boolean;
}

export const Container = styled(RectButton) <ButtonProps>`
  width: 100%;
  padding: 19px;
  align-items: center;
  justify-content: center;
  ${({ enabled }) => enabled && css`
      background-color: ${({ theme }) => theme.colors.main};
  `};
  ${({ enabled }) => !enabled && css`
      background-color: #767676;
  `};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.shape};
`;