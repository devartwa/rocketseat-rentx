import { CarAction } from "../actions/carActions";
import { CarListModel } from "../../@types";

type CarState = {
  carList: Array<CarListModel>;
  carSelected: CarListModel;
  carError: string | undefined;
};

const initialState: CarState = {
  carList: [],
  carSelected: {} as CarListModel,
  carError: undefined,
};

const CarReducer = (
  state: CarState = initialState,
  action: CarAction
) => {
  switch (action.type) {
    case 'ON_SAVE_CAR_LIST':
      return {
        ...state,
        carList: action.payload,
      };
    case 'ON_SAVE_SELECTED_CAR':
      return {
        ...state,
        carSelected: action.payload,
      };
    case 'ON_CAR_ERROR':
      return {
        ...state,
        carError: action.payload,
      };
    default:
      return state;
  }
};

export { CarReducer };