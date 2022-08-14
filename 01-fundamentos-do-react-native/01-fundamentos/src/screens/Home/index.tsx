import { Text, TextInput, View } from 'react-native';

import {styles} from './styles'


export default function Home() {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Nome do Evento</Text>
        <Text style={styles.eventDate}>Quarta, 4 de agostode 2022</Text>

        <TextInput style={styles.input} placeholder="Nome do aplicativo"
        placeholderTextColor="#6b6b6b" />
    </View>
  );
}