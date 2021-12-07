import React from 'react';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';

import {
  Container,
  Header,
  ImageSliderWrapper
} from './styles';

export function CarDetails() {
  return (
    <Container>
      <Header>
        <BackButton onPress={() => { }} />
      </Header>
      <ImageSliderWrapper>
        <ImageSlider imagesUrl={['https://lh3.googleusercontent.com/proxy/_KRxirmQ6FrR7xKjgzKkZAdWNM_6q6MSFpUNttLmaeF0PEIR-dESM9k90phJpwzrSPUxtPsgjeZew1U6aPYep9DbJ-Jm_1Iux3JNEJ29N7zncwosY6x0aVN0x9EW5lc']} />
      </ImageSliderWrapper>
    </Container>
  );
};