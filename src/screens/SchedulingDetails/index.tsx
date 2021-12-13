import React from 'react';

import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Acessory } from '../../components/Acessory';
import { Button } from '../../components/Button';
import { useTheme } from 'styled-components';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

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
  Acessories,
  Footer,
  RentalPeriod,
  CalendarIcon,
  DateInfo,
  DateTitle,
  DateValue,
  RentalPrice,
  RentalPriceLabel,
  RentalPriceDetails,
  RentalPriceQuota,
  RentalPriceTotal
} from './styles';

export function SchedulingDetails() {

  const theme = useTheme();
  return (
    <Container>
      <Header>
        <BackButton onPress={() => { }} />
      </Header>

      <ImageSliderWrapper>
        <ImageSlider imagesUrl={['https://lh3.googleusercontent.com/proxy/0MLgLBYfMnDpt2FywdB7AyHEuZMYh5sSMg9k0HbwFQeijG0NqXvTufTK8sUfSP2l2MPP-mGS9klqLt7LSbR6WtdNTDzwbDDqiXW02MSLBHp_N_o6SG18zF1D4Y362Go']} />
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

        <RentalPeriod>
          <CalendarIcon>
            <Feather name="calendar" size={RFValue(24)} color={theme.colors.shape} />
          </CalendarIcon>

          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>10/10/2000</DateValue>
          </DateInfo>

          <Feather name="chevron-right" size={RFValue(24)} color={theme.colors.shape} />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue>10/10/2000</DateValue>
          </DateInfo>
        </RentalPeriod>

        <RentalPrice>
          <RentalPriceLabel>TOTAL</RentalPriceLabel>
          <RentalPriceDetails>
            <RentalPriceQuota>R$ 120 x 3 diárias</RentalPriceQuota>
            <RentalPriceTotal>R$ 360</RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>
      </Content>

      <Footer>
        <Button title="Alugar" color={theme.colors.success} onPress={() => { }} />
      </Footer>
    </Container>
  );
};