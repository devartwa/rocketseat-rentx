import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { CarListModel } from '../../@types';
import { getAccessoryIcon } from '../../utils/getAccessoryIcon';

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
interface Props extends RectButtonProps {
  data: CarListModel;
}

export function Car({ data, ...rest }: Props) {
  const FuelIcon = getAccessoryIcon(data.fuel_type);

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
            <FuelIcon />
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