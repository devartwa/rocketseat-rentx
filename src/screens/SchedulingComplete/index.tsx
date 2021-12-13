import React from 'react';
import { StatusBar, useWindowDimensions } from 'react-native';
import { TinyButton } from '../../components/TinyButton';

import LogoSvg from '../../assets/logo_background_gray.svg';
import DoneSvg from '../../assets/done.svg';

import {
  Container,
  Content,
  DoneTitle,
  DoneMessage,
  Footer,
} from './styles';

export function SchedulingComplete() {
  const { width } = useWindowDimensions();

  let count = 0;

  const handleConfirm = () => {
    alert(count++);
  }

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <LogoSvg
        width={width}
      />

      <Content>
        <DoneSvg
          width={80}
          height={80}
        />
        <DoneTitle>Carro alugado com sucesso!</DoneTitle>
        <DoneMessage>
          Agora você só precisa ir {'\n'}
          até a consessionária da RentX {'\n'}
          para pegar seu automóvel.
        </DoneMessage>
        <Footer>
          <TinyButton title='OK' onPress={handleConfirm} />
        </Footer>
      </Content>
    </Container>
  );
};