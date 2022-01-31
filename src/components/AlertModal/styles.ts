import styled from "styled-components/native";
import Modal from "react-native-modal";
import { RFValue } from "react-native-responsive-fontsize";

export const ModalContainer = styled(Modal)`
  margin: 16px;
`;

export const Container = styled.View`
  width: 100%;
  min-height: 180px;
  align-items: center;
  justify-content: flex-start;
  background-color: ${({ theme }) => theme.colors.background_secondary};
  padding: 10px;
  border-radius: 5px;
`;

export const ActionContainer = styled.View`
  width: 100%;
  height: 24px;
  align-items: flex-end;
`;

export const CloseIconContainer = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
  justify-content: center;
  align-items: center;
`;

export const TitleContainer = styled.View`
  justify-content: center;
  align-items: center;
  padding-horizontal: 20px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(20)}px;
  font-weight: bold;
  text-align: center;
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.secondary_600};
`;

export const MessageContainer = styled.View`
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 100%;
`;

export const Message = styled.Text`
  font-size: ${RFValue(16)}px;
  text-align: center;
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.primary_500};
`;

export const ButtonContainer = styled.View`
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const ActionButtonContainer = styled.TouchableOpacity`
  width: 100%;
  padding: 20px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.main};
`;

export const ActionButtonText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.shape};
`;
