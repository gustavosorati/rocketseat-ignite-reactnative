import {useState} from 'react'
import { Alert } from 'react-native';
import { ButtonIcon } from "@components/ButtonIcon";
import { Filter } from "@components/Filter";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { FlatList } from "react-native";
import { Container, Form, Icon, HeaderList, NumberOfPlayers } from "./styles";
import { PlayerCard } from '@components/PlayerCard';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';
import { useRoute } from '@react-navigation/native';
import { playerAddByGroup } from '@storage/player/playerAddByGroup';
import { AppError } from '@utils/AppError';
import { playersGetByGroup } from '@storage/player/playersGetByGroup';

type RouteParams = {
  group: string;
}

export function Players() {
  const [team, setTeam] = useState('Time A');
  const [players, setPlayers] = useState([]);
  const [newPlayerName, setNewPlayerName] = useState('');

  const route = useRoute();
  const { group } = route.params as RouteParams;

  async function handleAddPlayer() {
    if(newPlayerName.trim().length === 0) {
      return Alert.alert('Novo player', 'Informe o nome da pessoa para adicionar');
    }

    const newPlayer = {
      name: newPlayerName,
      team: team
    }

    try {
      await playerAddByGroup(newPlayer, group);
      const x = await playersGetByGroup(group);

      console.log(x)
    } catch (error) {
      if(error instanceof AppError) {
        Alert.alert('Novo player', error.message);
        console.log(error);
      } else {
        Alert.alert('Novo player', 'Não foi possível adicionar');
        console.log(error);
      }
    }
  }

  return (
    <Container>
      <Header showBackButton />

        <Icon />

        <Highlight
          title={group}
          subtitle="Adicione a galera e separe os times"
        /> 

        <Form>
          <Input 
            placeholder="Nome do participante"
            onChangeText={setNewPlayerName}
            autoCorrect={false}
          />

          <ButtonIcon
            icon="add"
            onPress={handleAddPlayer}
          />
        </Form>

        <HeaderList>
          <FlatList
            data={['Time A', 'Time B']}
            keyExtractor={item => item}
            renderItem={({item}) => (
              <Filter
                title={item}
                isActive={item === team}
                onPress={() => setTeam(item)}
              />
            )}
            horizontal
          />

          <NumberOfPlayers>{players.length}</NumberOfPlayers>
        </HeaderList>

        <FlatList 
          data={players}
          keyExtractor={item => item}
          renderItem={({item}) => (
            <PlayerCard 
              name={item} 
              onRemove={() => {}}
            />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[
            { paddingBottom: 100},
            players.length === 0 && { flex: 1}
          ]}
          ListEmptyComponent={() => (
            <ListEmpty
              message="Não há pessoas nesse time"
            />
          )}
        />

        <Button 
          text="Remover Turma"
          type='SECONDARY'
        />
    </Container>
  )
}