import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import { StatusBar } from 'react-native';
import { BackButton } from '../../components/BackButton';
import { Button } from '../../components/Button';
import { Calendar, SelectedDatesProps, DayProps } from '../../components/Calendar';
import { generateInterval } from '../../utils/generateInterval';
import { StackNavigationProp } from '@react-navigation/stack';
import { MainParamList } from '../../@types';
import { getPlatformDate } from '../../utils/platformDate';
import { format } from 'date-fns';
import { AlertModal } from '../../components/AlertModal';
import services from '../../services/services';
import requester from '../../services/requester';
import { useSelector } from 'react-redux';
import { ApplicationState } from '../../redux';

import ArrowSvg from '../../assets/arrow.svg';

import {
  Container,
  Header,
  Title,
  RentalPeriod,
  DateInfo,
  DateTitle,
  DateValueContainer,
  DateValue,
  Content,
  Footer,
  Loading
} from './styles';

type SchedulingNavigationProp = StackNavigationProp<MainParamList, 'Scheduling'>;
type SchedulingProps = { navigation: SchedulingNavigationProp };

interface RentalPeriodProps {
  start: string;
  startFormatted: string;
  end: string;
  endFormatted: string;
}

export function Scheduling({ navigation }: SchedulingProps) {
  const { carSelected } = useSelector(
    (state: ApplicationState) => state.carReducer
  );

  const theme = useTheme();
  const [lastSelectedDate, setLastSelectedData] = useState<DayProps>({} as DayProps);
  const [selectedDates, setSelectedDates] = useState<SelectedDatesProps>({} as SelectedDatesProps);
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriodProps>({} as RentalPeriodProps);
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [modalUnavailable, setModalUnavailable] = useState(false);

  const handleGoBack = () => {
    navigation.goBack();
  }

  const handleSelectedDates = (date: DayProps) => {
    let start = !lastSelectedDate.timestamp ? date : lastSelectedDate;
    let end = date;

    if (start.timestamp > end.timestamp) {
      start = end;
      end = start;
    }

    setLastSelectedData(end);
    const interval = generateInterval(start, end);
    setSelectedDates(interval);

    const startDate = Object.keys(interval)[0];
    const endDate = Object.keys(interval)[Object.keys(interval).length - 1];
    setRentalPeriod({
      startFormatted: format(getPlatformDate(new Date(startDate)), 'dd/MM/yyyy'),
      start: start.dateString,
      endFormatted: format(getPlatformDate(new Date(endDate)), 'dd/MM/yyyy'),
      end: end.dateString,
    })
  }

  const handleConfirmRental = async () => {
    if (!rentalPeriod.startFormatted || !rentalPeriod.endFormatted) {
      return setModal(true);
    }
    setLoading(true);

    const service = {
      ...services.getSchedulesByCar,
      endpoint: services.getSchedulesByCar.endpoint.replace('{{carId}}', carSelected.id),
    };

    const result = await requester(service);

    const unavailableDate = result.data.unavailable_dates.includes(rentalPeriod.start) && result.data.unavailable_dates.includes(rentalPeriod.end);

    if (!unavailableDate) {
      navigation.navigate('SchedulingDetails', {
        dates: Object.keys(selectedDates)
      });
    } else {
      setModalUnavailable(true);
    }
    setLoading(false);
  }

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
          Escolha uma{'\n'}
          data de início e{'\n'}
          fim do aluguel
        </Title>

        <RentalPeriod>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValueContainer selected={!!rentalPeriod.startFormatted}>
              <DateValue>{rentalPeriod.startFormatted}</DateValue>
            </DateValueContainer>
          </DateInfo>

          <ArrowSvg />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValueContainer selected={!!rentalPeriod.endFormatted}>
              <DateValue>{rentalPeriod.endFormatted}</DateValue>
            </DateValueContainer>
          </DateInfo>
        </RentalPeriod>
      </Header>

      <Content>
        <Calendar
          selectedDates={selectedDates}
          onDayPress={handleSelectedDates}
        />
      </Content>

      <Footer>
        <Button
          title={loading ? <Loading /> : 'Confirmar'}
          onPress={handleConfirmRental}
        />
      </Footer>

      <AlertModal
        visible={modal}
        dismissModal={() => setModal(false)}
        message="Por favor, selecione uma data de início e fim do aluguel."
      />

      <AlertModal
        visible={modalUnavailable}
        dismissModal={() => setModalUnavailable(false)}
        message="Pedimos desculpas, porém as datas selecionadas estão indisponíveis. Por favor, selecione outras datas."
      />
    </Container>
  );
}