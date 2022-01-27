import React, { useEffect, useRef, useState } from 'react';
import { CarListModel, MainParamList } from '../../@types';
import { StackNavigationProp } from '@react-navigation/stack';
import { BackButton } from '../../components/BackButton';
import { AntDesign } from '@expo/vector-icons';
import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components';
import { Car } from '../../components/Car';
import { AnimatedLoading } from '../../components/AnimatedLoading';
import queryString from 'query-string';
import requester from '../../services/requester';
import services from '../../services/services';

import {
  Container,
  Header,
  Title,
  SubTitle,
  Content,
  Appointments,
  AppointmentsTitle,
  AppointmentsQuantity,
  CarList,
  CarWrapper,
  CarFooter,
  CarFooterTitle,
  CarFooterDate,
  CarFooterPeriod,
  EmptyContainer,
  EmptyText,
} from './styles';

type MyCarsNavigationProp = StackNavigationProp<MainParamList, 'MyCars'>;
type MyCarsProps = { navigation: MyCarsNavigationProp };

interface CarProps {
  car: CarListModel;
  user_id: number;
  id: number;
  startDate: string;
  endDate: string;
}

export function MyCars({ navigation }: MyCarsProps) {
  const [cars, setCars] = useState<CarProps[]>([]);
  const [loading, setLoading] = useState(true);

  const isMounted = useRef(true);
  const theme = useTheme();

  const handleGoBack = () => {
    navigation.goBack();
  }

  async function getCars() {
    const user_id = 1;
    const endpointParams = queryString.stringify({
      user_id
    });

    const service = {
      ...services.getSchedulesByUser,
      endpoint: services.getSchedulesByUser.endpoint.concat(endpointParams),
    };

    const result = await requester(service);

    if (result.success) {
      setCars(result.data);
    } else {
      console.log("Error: ", result.error);
    }
    setLoading(false);
  }

  useEffect(() => {
    getCars();
    return () => {
      isMounted.current = false;
    };
  }, []);

  return (
    <Container>
      <Header>
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="transparent"
        />
        <BackButton
          onPress={handleGoBack}
          color={theme.colors.shape}
        />

        <Title>
          Seus agendamentos,{'\n'}
          estão aqui.
        </Title>

        <SubTitle>
          Conforto, segurança e praticidade.
        </SubTitle>
      </Header>
      {loading ? (
        <AnimatedLoading />
      ) : cars === null || cars.length <= 0 ? (
        <EmptyContainer>
          <AntDesign
            name="exclamationcircleo"
            size={32}
            color={theme.colors.main}
            style={{ marginBottom: 25 }}
          />
          <EmptyText>Você não possui nenhum carro alugado.</EmptyText>
        </EmptyContainer>
      ) : (
        (
          <Content>
            <Appointments>
              <AppointmentsTitle>Agendamentos feitos</AppointmentsTitle>
              <AppointmentsQuantity>{cars.length}</AppointmentsQuantity>
            </Appointments>
            <CarList
              data={cars}
              keyExtractor={item => String(item.id)}
              renderItem={({ item }) => (
                <CarWrapper>
                  <Car data={item.car} />
                  <CarFooter>
                    <CarFooterTitle>Período</CarFooterTitle>
                    <CarFooterPeriod>
                      <CarFooterDate>{item.startDate}</CarFooterDate>
                      <AntDesign
                        name="arrowright"
                        size={20}
                        color={theme.colors.title}
                        style={{ marginHorizontal: 10 }}
                      />
                      <CarFooterDate>{item.endDate}</CarFooterDate>
                    </CarFooterPeriod>
                  </CarFooter>
                </CarWrapper>
              )}
            />
          </Content>
        )
      )
      }
    </Container>
  );
};