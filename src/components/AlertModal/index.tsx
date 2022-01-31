import React from 'react';
import CloseIcon from '../../assets/alertModal/close.svg';

import {
  ModalContainer,
  Container,
  ActionContainer,
  CloseIconContainer,
  TitleContainer,
  Title,
  MessageContainer,
  Message,
  ButtonContainer,
  ActionButtonContainer,
  ActionButtonText
} from './styles';

export interface AlertModalComponent {
  visible: boolean;
  title?: string;
  message?: string;
  hideButton?: boolean;
  dismissModal: () => void;
}

const translate = (props: AlertModalComponent) => ({
  visible: props.visible ? props.visible : false,
  title: props.title ? props.title : '',
  message: props.message,
  hideButton: props.hideButton ? props.hideButton : false,
  dismissModal: props.dismissModal ? props.dismissModal : () => { },
});

export function AlertModal(props: AlertModalComponent) {
  const {
    visible,
    title,
    message,
    hideButton,
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
        <TitleContainer>
          <Title>{title}</Title>
        </TitleContainer>
        <MessageContainer>
          <Message>{message}</Message>
        </MessageContainer>
        {!hideButton && (
          <ButtonContainer>
            <ActionButtonContainer onPress={dismissModal}>
              <ActionButtonText>Confirmar</ActionButtonText>
            </ActionButtonContainer>
          </ButtonContainer>
        )}
      </Container>
    </ModalContainer>
  );
};