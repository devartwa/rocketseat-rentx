import { NavigatorScreenParams } from '@react-navigation/native';

export type RootStackParamList = {
  Root: NavigatorScreenParams<MainParamList>;
};

export type MainParamList = {
  Splash: undefined;
  SignIn: undefined;
  SignUpFirstStep: undefined;
  SignUpSecondStep: undefined;
  Home: undefined;
  CarDetails: undefined;
  Scheduling: undefined;
  SchedulingDetails: {
    dates: string[];
  };
  SchedulingComplete: undefined;
  MyCars: undefined;
};

export enum RequesterMethodEnum {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
  PATCH = 'PATCH',
}

export type RequesterServiceModel = {
  method: RequesterMethodEnum;
  endpoint: string;
  timeout?: number;
  attempt?: number;
};

export type RequesterOptionsModel = {
  data?: any;
  headers?: any;
};

export type RequesterResponseModel = {
  success: boolean;
  status?: number;
  error: any;
  data: any;
};

export type RentModel = {
  period: string;
  price: number;
}

export type AccessoriesModel = {
  type: string;
  name: string;
}

export type CarListModel = {
  id: string;
  brand: string;
  name: string;
  about: string;
  rent: RentModel;
  fuel_type: string;
  thumbnail: string;
  accessories: AccessoriesModel[];
  photos: string[];
}