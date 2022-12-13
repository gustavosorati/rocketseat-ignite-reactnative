import { StatusBar } from 'expo-status-bar';
import { Nunito_400Regular, Nunito_700Bold } from '@expo-google-fonts/nunito';
import { useFonts } from 'expo-font';
import { Routes } from './src/routes';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/theme/index';
import {Text} from 'react-native';
import { NewMeal } from '@screens/NewMeal';

export default function App() {
  const [fontsLoaded] = useFonts({ Nunito_400Regular, Nunito_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar />

      {/* { fontsLoaded ? <Routes /> : <Text>Não carregou</Text> } */}
      { fontsLoaded ? <NewMeal /> : <Text>Não carregou</Text> }

      {/* <NewMeal /> */}
    </ThemeProvider>
  );
}
