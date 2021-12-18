import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { StackNavigationProp } from '@react-navigation/stack';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState, saveCarList, saveSelectedCar } from '../../redux';
import { MainParamList, CarListModel } from '../../@types';

import { Car } from '../../components/Car';
import { Load } from '../../components/Load';
import Logo from '../../assets/logo.svg';

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
  const { carList, carSelected } = useSelector(
    (state: ApplicationState) => state.carReducer
  );
  const [loading, setLoading] = useState(true);

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
      console.log('Error', result.error);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchCars();
  }, []);

  const renderItem = ({ item, index }) => <Car onPress={() => handleCarDetails(index)} data={item} />;

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
      {loading ? <Load /> : (
        <CarList
          data={carList}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      )}

    </Container>
  );
};