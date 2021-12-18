import React from 'react';

import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Accessory } from '../../components/Accessory';
import { Button } from '../../components/Button';
import { StackNavigationProp } from '@react-navigation/stack';
import { MainParamList } from '../../@types';
import { useSelector } from 'react-redux';
import { ApplicationState } from '../../redux';
import { StatusBar } from 'react-native';
import { getAccessoryIcon } from '../../utils/accessoryIcon';

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
  Accessories,
  Footer,
} from './styles';

type CarDetailsNavigationProp = StackNavigationProp<MainParamList, 'CarDetails'>;
type CarDetailsProps = { navigation: CarDetailsNavigationProp };

export function CarDetails({ navigation }: CarDetailsProps) {
  const { carSelected } = useSelector(
    (state: ApplicationState) => state.carReducer
  );

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
        <ImageSlider imagesUrl={carSelected.photos} />
      </ImageSliderWrapper>

      <Content>
        <Details>
          <Description>
            <Brand>{carSelected.brand}</Brand>
            <Name>{carSelected.name}</Name>
          </Description>

          <Rent>
            <Period>{carSelected.rent.period}</Period>
            <Price>R$ {carSelected.rent.price}</Price>
          </Rent>
        </Details>

        <Accessories>
          {carSelected.accessories.map((accessory, index) => (
            <Accessory key={index} name={accessory.name} icon={getAccessoryIcon(accessory.type)} />
          ))}
        </Accessories>

        <About>
          {carSelected.about}
        </About>
      </Content>

      <Footer>
        <Button title="Escolher período do aluguel" onPress={handleConfirmRental} />
      </Footer>
    </Container>
  );
};