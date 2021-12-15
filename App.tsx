import 'react-native-gesture-handler';
import React from 'react';
import AppLoading from 'expo-app-loading';
import { Routes } from './src/routes';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { persistor, store } from './src/redux';
import { PersistGate } from 'redux-persist/integration/react';
import theme from './src/styles/theme';
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
} from '@expo-google-fonts/inter';
import {
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold,
} from '@expo-google-fonts/archivo';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
      {/* </PersistGate> */}
    </Provider>
  );
}
