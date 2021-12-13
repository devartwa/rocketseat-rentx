import React from 'react';

import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Acessory } from '../../components/Acessory';
import { Button } from '../../components/Button';
import { StackNavigationProp } from '@react-navigation/stack';
import { MainParamList } from '../../@types';

//Icons
import speedSvg from '../../assets/speed.svg'
import acceletarionSvg from '../../assets/acceleration.svg';
import forceSvg from '../../assets/force.svg';
import gasolineSvg from '../../assets/gasoline.svg';
import exchangeSvg from '../../assets/exchange.svg';
import peopleSvg from '../../assets/people.svg';

import {
  Container,
  Header,
  ImageSliderWrapper,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  About,
  Acessories,
  Footer,
} from './styles';
import { StatusBar } from 'react-native';

type CarDetailsNavigationProp = StackNavigationProp<MainParamList, 'CarDetails'>;
type CarDetailsProps = { navigation: CarDetailsNavigationProp };

export function CarDetails({ navigation }: CarDetailsProps) {

  const handleGoBack = () => {
    navigation.goBack();
  }

  const handleConfirmRental = () => {
    navigation.navigate('Scheduling');
  }

  return (
    <Container>
      <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />
      <Header>
        <BackButton onPress={handleGoBack} />
      </Header>

      <ImageSliderWrapper>
        <ImageSlider imagesUrl={['https://lh3.googleusercontent.com/proxy/fDKLY20Z0ZLQry7cA5fgx6-RgeS0Rw98ID1vP76JCi924487T8SuhKwsP_Zco7AN0VZnsZW4I_IS-XZUzuepGexDRhx7lJPeMNTxKBnQor_N731xitqmWE7I4RYEmhU']} />
      </ImageSliderWrapper>

      <Content>
        <Details>
          <Description>
            <Brand>FIAT</Brand>
            <Name>Uno</Name>
          </Description>

          <Rent>
            <Period>AO DIA</Period>
            <Price>R$ 120</Price>
          </Rent>
        </Details>

        <Acessories>
          <Acessory name="380Km/h" icon={speedSvg} />
          <Acessory name="3.2s" icon={acceletarionSvg} />
          <Acessory name="800 HP" icon={forceSvg} />
          <Acessory name="Gasolina" icon={gasolineSvg} />
          <Acessory name="Auto" icon={exchangeSvg} />
          <Acessory name="5 pessoas" icon={peopleSvg} />
        </Acessories>

        <About>
          The Uno is a compact car that is available in a variety of colors.
        </About>
      </Content>

      <Footer>
        <Button title="Escolher período do aluguel" onPress={handleConfirmRental} />
      </Footer>
    </Container>
  );
};