import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import { StatusBar } from 'react-native';
import { BackButton } from '../../components/BackButton';
import { Button } from '../../components/Button';
import { Calendar, SelectedDatesProps, DayProps } from '../../components/Calendar';
import { generateInterval } from '../../utils/generateInterval';
import { StackNavigationProp } from '@react-navigation/stack';
import { MainParamList } from '../../@types';

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
  Footer
} from './styles';

type SchedulingNavigationProp = StackNavigationProp<MainParamList, 'Scheduling'>;
type SchedulingProps = { navigation: SchedulingNavigationProp };

export function Scheduling({ navigation }: SchedulingProps) {

  const theme = useTheme();
  const [lastSelectedDate, setLastSelectedData] = useState<DayProps>({} as DayProps);
  const [selectedDates, setSelectedDates] = useState<SelectedDatesProps>({} as SelectedDatesProps);

  const handleGoBack = () => {
    navigation.goBack();
  }

  const handleConfirmRental = () => {
    navigation.navigate('SchedulingDetails');
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
            <DateValueContainer selected={false}>
              <DateValue></DateValue>
            </DateValueContainer>
          </DateInfo>

          <ArrowSvg />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValueContainer selected={false}>
              <DateValue></DateValue>
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
          title="Confirmar"
          onPress={handleConfirmRental}
        />
      </Footer>
    </Container>
  );
}