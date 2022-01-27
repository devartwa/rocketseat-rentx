import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { Pressable } from "react-native";

interface Props {
  isFocused: boolean;
}

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
`;

export const IconContainer = styled.View<Props>`
  width: 55px;
  height: 56px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background_secondary};
  margin-right: 2px;
  ${({ theme, isFocused }) =>
    isFocused &&
    css`
      border-bottom-width: 2px;
      border-bottom-color: ${theme.colors.main};
    `};
`;

export const InputText = styled.TextInput<Props>`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_secondary};
  padding: 0px 15px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.text};
  ${({ theme, isFocused }) =>
    isFocused &&
    css`
      border-bottom-width: 2px;
      border-bottom-color: ${theme.colors.main};
    `};
`;

export const ShowPasswordButton = styled(Pressable)<Props>`
  width: 55px;
  height: 56px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background_secondary};
  ${({ theme, isFocused }) =>
    isFocused &&
    css`
      border-bottom-width: 2px;
      border-bottom-color: ${theme.colors.main};
    `};
`;
