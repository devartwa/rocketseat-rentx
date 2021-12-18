import React, { useEffect, useState } from 'react';

import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Accessory } from '../../components/Accessory';
import { Button } from '../../components/Button';
import { useTheme } from 'styled-components';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { StackNavigationProp } from '@react-navigation/stack';
import { MainParamList } from '../../@types';
import { useRoute } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { ApplicationState } from '../../redux';
import { getAccessoryIcon } from '../../utils/accessoryIcon';
import { format } from 'date-fns';
import { getPlatformDate } from '../../utils/platformDate';

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
  Accessories,
  Footer,
  RentalPeriod,
  CalendarIcon,
  DateInfo,
  DateTitle,
  DateValue,
  RentalPrice,
  RentalPriceLabel,
  RentalPriceDetails,
  RentalPriceQuota,
  RentalPriceTotal
} from './styles';
import services from '../../services/services';
import requester from '../../services/requester';

type SchedulingDetailsNavigationProp = StackNavigationProp<MainParamList, 'SchedulingDetails'>;
type SchedulingDetailsProps = { navigation: SchedulingDetailsNavigationProp };

interface RentalPeriodProps {
  start: string;
  end: string;
}

export function SchedulingDetails({ navigation }: SchedulingDetailsProps) {
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriodProps>({} as RentalPeriodProps);

  const theme = useTheme();
  const route = useRoute();

  const { dates }: any = route.params;
  const { carSelected } = useSelector(
    (state: ApplicationState) => state.carReducer
  );

  const rentalTotal = Number(dates.length) * carSelected.rent.price;

  const handleConfirmRental = async () => {
    const service = {
      ...services.getSchedulesByCar,
      endpoint: services.getSchedulesByCar.endpoint.replace('{{carId}}', carSelected.id),
    };

    const result = await requester(service);

    const unvailable_dates = [
      ...result,
      ...dates,
    ]

    const response = await requester()


    // navigation.navigate('SchedulingComplete');
  }

  const handleGoBack = () => {
    navigation.goBack();
  }

  useEffect(() => {
    setRentalPeriod({
      start: format(getPlatformDate(new Date(dates[0])), 'dd/MM/yyyy'),
      end: format(getPlatformDate(new Date(dates[dates.length - 1])), 'dd/MM/yyyy'),
    });
  }, []);

  return (
    <Container>
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

        <RentalPeriod>
          <CalendarIcon>
            <Feather name="calendar" size={RFValue(24)} color={theme.colors.shape} />
          </CalendarIcon>

          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>{rentalPeriod.start}</DateValue>
          </DateInfo>

          <Feather name="chevron-right" size={RFValue(24)} color={theme.colors.shape} />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue>{rentalPeriod.end}</DateValue>
          </DateInfo>
        </RentalPeriod>

        <RentalPrice>
          <RentalPriceLabel>TOTAL</RentalPriceLabel>
          <RentalPriceDetails>
            <RentalPriceQuota>R$ {carSelected.rent.price} x {Number(dates.length)}{' '}
              {dates.length > 1 ? 'diárias' : ' diária'}
            </RentalPriceQuota>
            <RentalPriceTotal>R$ {rentalTotal}</RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>
      </Content>

      <Footer>
        <Button title="Alugar agora" color={theme.colors.success} onPress={handleConfirmRental} />
      </Footer>
    </Container>
  );
};