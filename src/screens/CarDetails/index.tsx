import React from 'react';

import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Acessory } from '../../components/Acessory';
import { Button } from '../../components/Button';

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

export function CarDetails() {
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
            <Price>R$ 120,00</Price>
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
        <Button title="Confirmar" onPress={() => { }} />
      </Footer>
    </Container>
  );
};