import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Header = styled.View`
  margin-top: ${RFValue(30)}px;
`;

export const HeaderWrapper = styled.View`
  width: 100%;
  height: 113px;
  background-color: ${({ theme }) => theme.colors.header};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-horizontal: 20px;
`;

export const TotalCars = styled.Text`
  margin-top: ${RFValue(30)}px;
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
  color: ${({ theme }) => theme.colors.text};
`;