import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistUser = {
  key: 'persistUser',
  storage: AsyncStorage,
  whitelist: ['user'],
};

import { CarReducer } from './carReducer';

const rootReducer = combineReducers({
  carReducer: CarReducer,
  // userReducer: persistReducer(persistUser, UserReducer),
});

export type ApplicationState = ReturnType<typeof rootReducer>;

export { rootReducer };
