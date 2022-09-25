import theme from '@theme/index';
import { ThemeProvider } from 'styled-components';
import { Groups } from './src/screens/Groups';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'
import { Loading } from '@components/Loading';
import { StatusBar } from 'react-native';


export default function App() {
  const [fonstsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
       <StatusBar 
        barStyle={'light-content'}
        backgroundColor="transparent"
        translucent
      />

      { fonstsLoaded ? <Groups /> : <Loading /> }
    </ThemeProvider>
  );
}


