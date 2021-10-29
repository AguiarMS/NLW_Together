import React from 'react';
import { useFonts } from 'expo-font'
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';
import AppLoading from 'expo-app-loading'; 'expo-app-loading'

import { SingnIn } from './src/screens/SignIn';
import { StatusBar } from 'react-native';
import { Background } from './src/compoments/Background';
import { Home } from './src/screens/Home';


export default function App() {

  // Variavel criada para carregar as fontes no dispositivo, caso as fontes nao carregar irá ficar na tela de loading com o splash.
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <Background>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent // preenchimento no topo da tela
      />
      <Home />
    </Background>
  );
};
