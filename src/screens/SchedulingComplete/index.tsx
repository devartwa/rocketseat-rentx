import React from 'react';
import { StatusBar, useWindowDimensions } from 'react-native';
import { TinyButton } from '../../components/TinyButton';
import { StackNavigationProp } from '@react-navigation/stack';
import { MainParamList } from '../../@types';

import LogoSvg from '../../assets/logo_background_gray.svg';
import DoneSvg from '../../assets/done.svg';

import {
  Container,
  Content,
  DoneTitle,
  DoneMessage,
  Footer,
} from './styles';

type SchedulingCompleteNavigationProp = StackNavigationProp<MainParamList, 'SchedulingComplete'>;
type SchedulingCompleteProps = { navigation: SchedulingCompleteNavigationProp };

export function SchedulingComplete({ navigation }: SchedulingCompleteProps) {
  const { width } = useWindowDimensions();

  const handleConfirm = () => {
    navigation.navigate('Home');
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