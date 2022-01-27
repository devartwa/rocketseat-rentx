import React from 'react';
import { useSharedValue, useAnimatedScrollHandler, useAnimatedStyle, interpolate, Extrapolate } from 'react-native-reanimated';
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
import { useTheme } from 'styled-components';

import {
  Container,
  AnimatedHeader,
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

  const theme = useTheme();

  const scrollY = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler(event => {
    scrollY.value = event.contentOffset.y;
  });

  const headerStyleAnimated = useAnimatedStyle(() => {
    return {
      height: interpolate(scrollY.value, [0, 200], [200, 70], Extrapolate.CLAMP),
    }
  });

  const sliderStyleAnimated = useAnimatedStyle(() => {
    return {
      opacity: interpolate(scrollY.value, [0, 150], [1, 0], Extrapolate.CLAMP),
    }
  });

  const handleGoBack = () => {
    navigation.goBack();
  }

  const handleConfirmRental = () => {
    navigation.navigate('Scheduling');
  }

  return (
    <Container>
      <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />
      <AnimatedHeader style={[headerStyleAnimated, { position: 'absolute', overflow: 'hidden', zIndex: 1, backgroundColor: theme.colors.background_secondary }]}>
        <Header>
          <BackButton onPress={handleGoBack} />
        </Header>

        <ImageSliderWrapper style={sliderStyleAnimated}>
          <ImageSlider imagesUrl={carSelected.photos} />
        </ImageSliderWrapper>
      </AnimatedHeader>

      <Content
        onScroll={scrollHandler}
        scrollEventThrottle={16}
      >
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
          {carSelected.about}
          {carSelected.about}
          {carSelected.about}
          {carSelected.about}
        </About>
      </Content>

      <Footer>
        <Button title="Escolher período do aluguel" onPress={handleConfirmRental} />
      </Footer>
    </Container>
  );
};