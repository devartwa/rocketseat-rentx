import {
  RequesterMethodEnum,
  RequesterServiceModel,
} from '../@types';

interface Services {
  getCars: RequesterServiceModel;
  getSchedulesByCar: RequesterServiceModel;
  putSchedulesByCar: RequesterServiceModel;
}

const services: Services = {
  getCars: {
    method: RequesterMethodEnum.GET,
    endpoint: 'cars',
  },
  getSchedulesByCar: {
    method: RequesterMethodEnum.GET,
    endpoint: 'schedules_bycars/{{carId}}',
  },
  putSchedulesByCar: {
    method: RequesterMethodEnum.PUT,
    endpoint: 'schedules_bycars/{{carId}}',
  }
};

export default services;
