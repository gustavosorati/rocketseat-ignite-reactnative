import { FlatList, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Participant } from '../../components/Participant';

import {styles} from './styles'


export default function Home() {
    const participants = ['Rodrigo', 'Vini', 'Diego', 'Biro', 'Ana', 'Isa', 'Jack', 'Mayk', 'João'];


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

        <FlatList 
            data={participants}
            keyExtractor={item => item}
            renderItem={({item}) => (
                <Participant key={item} name={item} onRemove={handleParticipantRemove} />
            )}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={() => (
                <Text style={styles.listEmptyText}>Níguem chegou no evento ainda? Adicione participantes a sua lista de presença</Text>
            )}
        />
            

        <ScrollView showsVerticalScrollIndicator={false}>
            {participants.map(participant => {
                return(
                    <Participant key={participant} name={participant} onRemove={handleParticipantRemove} />
                )
            })}
        </ScrollView>
    </View>
    );
}