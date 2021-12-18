import React from 'react';

import CloseIcon from '../../assets/alertModal/close.svg';
import { Button } from '../Button';

import {
  ModalContainer,
  Container,
  ActionContainer,
  CloseIconContainer,
  MessageContainer,
  Message,
  ButtonContainer,
  ActionButtonContainer,
  ActionButtonText
} from './styles';

export interface AlertModalComponent {
  visible: boolean;
  message?: string;
  dismissModal: () => void;
}

const translate = (props: AlertModalComponent) => ({
  visible: props.visible ? props.visible : false,
  message: props.message,
  dismissModal: props.dismissModal ? props.dismissModal : () => { },
});

export function AlertModal(props: AlertModalComponent) {
  const {
    visible,
    message,
    dismissModal
  } = translate(props);

  return (
    <ModalContainer
      isVisible={visible}
      onBackdropPress={dismissModal}
      onBackButtonPress={dismissModal}
      animationIn="fadeIn"
      animationOut="fadeOut"
      backdropTransitionOutTiming={0}
    >
      <Container>
        <ActionContainer>
          <CloseIconContainer onPress={dismissModal}>
            <CloseIcon />
          </CloseIconContainer>
        </ActionContainer>
        <MessageContainer>
          <Message>{message}</Message>
        </MessageContainer>
        <ButtonContainer>
          <ActionButtonContainer onPress={dismissModal}>
            <ActionButtonText>Confirmar</ActionButtonText>
          </ActionButtonContainer>
        </ButtonContainer>
      </Container>
    </ModalContainer>
  );
};