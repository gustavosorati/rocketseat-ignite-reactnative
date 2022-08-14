import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Participant } from '../../components/Participant';

import {styles} from './styles'


export default function Home() {


    function handleParticipantAdd() {
        console.log('Você clicou no botão de adicionar')
    }

    function handleParticipantRemove() {
        console.log('Você clicou no botão de remover')
    }

    return (
    <View style={styles.container}>
        <Text style={styles.eventName}>Nome do Evento</Text>
        <Text style={styles.eventDate}>Quarta, 4 de agostode 2022</Text>

        <View style={styles.form}>
            <TextInput style={styles.input} placeholder="Nome do aplicativo"
            placeholderTextColor="#6b6b6b" />

            <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
        </View>

        <Participant name="Gustavo" onRemove={handleParticipantRemove} />
        <Participant name="Diego" onRemove={handleParticipantRemove} />
        <Participant name="Bruno" onRemove={handleParticipantRemove} />
    </View>
    );
}