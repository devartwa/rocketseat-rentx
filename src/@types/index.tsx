import { NavigatorScreenParams } from '@react-navigation/native';

export type RootStackParamList = {
  Root: NavigatorScreenParams<MainParamList>;
};

export type MainParamList = {
  Home: undefined;
  CarDetails: undefined;
  Scheduling: undefined;
  SchedulingDetails: undefined;
  SchedulingComplete: undefined;
};