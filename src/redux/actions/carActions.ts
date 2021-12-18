import { Dispatch } from 'react';

import { CarListModel } from '../../@types';

export interface SaveCarAction {
  readonly type: 'ON_SAVE_CAR_LIST';
  payload: Array<CarListModel>;
}

export interface SaveSelectedCarAction {
  readonly type: 'ON_SAVE_SELECTED_CAR';
  payload: CarListModel;
}

export interface ErrorCarAction {
  readonly type: 'ON_CAR_ERROR';
  payload: any;
}

export type CarAction =
  | SaveCarAction
  | SaveSelectedCarAction
  | ErrorCarAction;

export const saveCarList =
  (value: Array<CarListModel>) => async (dispatch: Dispatch<CarAction>) => {
    try {
      dispatch({
        type: 'ON_SAVE_CAR_LIST',
        payload: value,
      });
    } catch (error) {
      dispatch({
        type: 'ON_CAR_ERROR',
        payload: error,
      });
    }
  };

export const saveSelectedCar =
  (value: CarListModel) => async (dispatch: Dispatch<CarAction>) => {
    try {
      dispatch({
        type: 'ON_SAVE_SELECTED_CAR',
        payload: value,
      });
    } catch (error) {
      dispatch({
        type: 'ON_CAR_ERROR',
        payload: error,
      });
    }
  };