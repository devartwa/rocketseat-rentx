import React from 'react';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Logo from '../../assets/logo.svg';
import { Car } from '../../components/Car';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { MainParamList } from '../../@types';

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

  const handleCarDetails = () => {
    navigation.navigate('CarDetails');
  }

  const carOne = {
    brand: 'Fiat',
    name: 'Uno',
    rent: {
      period: 'AO DIA',
      price: 99,
    },
    thumbnail: 'https://lh3.googleusercontent.com/proxy/fDKLY20Z0ZLQry7cA5fgx6-RgeS0Rw98ID1vP76JCi924487T8SuhKwsP_Zco7AN0VZnsZW4I_IS-XZUzuepGexDRhx7lJPeMNTxKBnQor_N731xitqmWE7I4RYEmhU',
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
        renderItem={({ item }) => <Car onPress={handleCarDetails} data={carOne} />}

      />
    </Container>
  );
};