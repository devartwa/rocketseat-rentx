import React from 'react';

import {
  Container,
  Details,
  Brand,
  Name,
  About,
  Rent,
  Period,
  Price,
  Type,
  CarImage,
} from './styles';

import Gasoline from '../../assets/gasoline.svg';
import { RectButtonProps } from 'react-native-gesture-handler';
import { CarListModel } from '../../@types';
interface Props extends RectButtonProps {
  data: CarListModel;
}

export function Car({ data, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Details>
        <Brand>{data.brand}</Brand>
        <Name>{data.name}</Name>
        <About>
          <Rent>
            <Period>{data.rent.period}</Period>
            <Price>{`R$ ${data.rent.price}`}</Price>
          </Rent>
          <Type>
            <Gasoline />
          </Type>
        </About>
      </Details>
      <CarImage
        resizeMode="contain"
        source={{ uri: data.thumbnail }}
      />
    </Container>
  );
};