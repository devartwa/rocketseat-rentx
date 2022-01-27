import React, { useEffect, useRef, useState } from 'react';
import { StatusBar, BackHandler } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { StackNavigationProp } from '@react-navigation/stack';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState, saveCarList, saveSelectedCar } from '../../redux';
import { MainParamList } from '../../@types';

import { FloatingButton } from '../../components/FloatingButton';
import { useTheme } from 'styled-components';

import { Car } from '../../components/Car';
import { AnimatedLoading } from '../../components/AnimatedLoading';
import Logo from '../../assets/logo.svg';
import CarSvg from '../../assets/car.svg';

import services from '../../services/services';
import requester from '../../services/requester';

import {
  Container,
  Header,
  HeaderContent,
  TotalCars,
  CarList,
} from './styles';

type HomeNavigationProp = StackNavigationProp<MainParamList, 'Home'>;
type HomeProps = { navigation: HomeNavigationProp };

export function Home({ navigation }: HomeProps) {
  const dispatch = useDispatch();
  const theme = useTheme();
  const { carList, carSelected } = useSelector(
    (state: ApplicationState) => state.carReducer
  );
  const [loading, setLoading] = useState(true);
  const isMounted = useRef(true);

  const handleCarDetails = (index: number) => {
    dispatch(saveSelectedCar(carList[index]));
    if (carSelected) {
      navigation.navigate('CarDetails');
    }
  }

  const fetchCars = async () => {
    const service = {
      ...services.getCars,
      endpoint: services.getCars.endpoint,
    };

    const result = await requester(service);

    if (result.success) {
      dispatch(saveCarList(result.data));
    } else {
      console.log("Error: ", result.error);
    }
    setLoading(false);
  }

  const handleMyCars = () => {
    navigation.navigate('MyCars');
  }

  useEffect(() => {
    fetchCars();
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      return null;
    });
  }, []);

  const renderItem = ({ item, index }) => <Car onPress={() => handleCarDetails(index)} data={item} />;

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <Header>
        <HeaderContent>
          <Logo style={{ marginTop: 6 }} width={RFValue(108)} height={RFValue(12)} />
          {
            !loading && (
              <TotalCars>
                Total de {carList.length}{' '}
                {carList.length > 1 ? 'carros' : 'carro'}
              </TotalCars>
            )
          }
        </HeaderContent>
      </Header>
      {loading ? <AnimatedLoading /> : (
        <CarList
          data={carList}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      )}
      <FloatingButton
        iconName="ios-car-sport"
        size={RFValue(32)}
        color={theme.colors.background_secondary}
        onPress={handleMyCars}
      />
    </Container>
  );
};