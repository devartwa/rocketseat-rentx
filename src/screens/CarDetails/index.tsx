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
import { useRoute } from '@react-navigation/native';
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
  const route = useRoute();
  const { index }: any = route.params;
  const { carList } = useSelector(
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
        <ImageSlider imagesUrl={carList[index].photos} />
      </ImageSliderWrapper>

      <Content>
        <Details>
          <Description>
            <Brand>{carList[index].brand}</Brand>
            <Name>{carList[index].name}</Name>
          </Description>

          <Rent>
            <Period>{carList[index].rent.period}</Period>
            <Price>R$ {carList[index].rent.price}</Price>
          </Rent>
        </Details>

        <Accessories>
          {carList[index].accessories.map((accessory, index) => (
            <Accessory key={index} name={accessory.name} icon={getAccessoryIcon(accessory.type)} />
          ))}
        </Accessories>

        <About>
          {carList[index].about}
        </About>
      </Content>

      <Footer>
        <Button title="Escolher período do aluguel" onPress={handleConfirmRental} />
      </Footer>
    </Container>
  );
};