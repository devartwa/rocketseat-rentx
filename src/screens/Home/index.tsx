import React from 'react';
import { StatusBar } from 'react-native';
import {
  Container,
  Header,
  HeaderContent,
  TotalCars,
  CarList,
} from './styles';
import { RFValue } from 'react-native-responsive-fontsize';
import Logo from '../../assets/logo.svg';
import { Car } from '../../components/Car';

export function Home() {

  const carOne = {
    brand: 'Fiat',
    name: 'Uno',
    rent: {
      period: 'AO DIA',
      price: 99,
    },
    thumbnail: 'https://lh3.googleusercontent.com/proxy/_KRxirmQ6FrR7xKjgzKkZAdWNM_6q6MSFpUNttLmaeF0PEIR-dESM9k90phJpwzrSPUxtPsgjeZew1U6aPYep9DbJ-Jm_1Iux3JNEJ29N7zncwosY6x0aVN0x9EW5lc',
  }
  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <TotalCars>
            Total de 12 carros
          </TotalCars>
        </HeaderContent>
      </Header>
      <CarList
        data={[1, 2, 3, 4, 5, 6, 7]}
        keyExtractor={(item) => String(item)}
        renderItem={({ item }) => <Car data={carOne} />}

      />
    </Container>
  );
};