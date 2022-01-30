import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import AppLoading from 'expo-app-loading';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';

import theme from './src/global/styles/';

import { AppRoutes } from './src/routes/app.routes';


export default function App() {

  const [ fontsLoaded ] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });

  if (!fontsLoaded) return <AppLoading />;
  
  return (
    <ThemeProvider theme={theme}>
      <StatusBar translucent/>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <AppRoutes />
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}


;