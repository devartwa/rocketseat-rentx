import {
  RequesterMethodEnum,
  RequesterServiceModel,
} from '../@types';

interface Services {
  getCars: RequesterServiceModel;
}

const services: Services = {
  getCars: {
    method: RequesterMethodEnum.GET,
    endpoint: 'cars',
  },
};

export default services;
