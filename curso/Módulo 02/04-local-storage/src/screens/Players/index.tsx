import {useState, useEffect, useRef } from 'react'
import { Alert, FlatList, TextInput } from 'react-native';
import { useRoute } from '@react-navigation/native';

import { ButtonIcon } from "@components/ButtonIcon";
import { Filter } from "@components/Filter";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { PlayerCard } from '@components/PlayerCard';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';

import { playerAddByGroup } from '@storage/player/playerAddByGroup';
import { playerGetByGroupAndTeam } from '@storage/player/playerGetByGroupAndTeam';

import { AppError } from '@utils/AppError';

import { Container, Form, Icon, HeaderList, NumberOfPlayers } from "./styles";
import { PlayerStorageDTO } from '@storage/player/PlayerStorageDTO';
import { playerRemoveByGroup } from '@storage/player/playerRemoveByGroup';

type RouteParams = {
  group: string;
}

export function Players() {
  const [team, setTeam] = useState('Time A');
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);
  const [newPlayerName, setNewPlayerName] = useState('');

  const newPlayerNameInputRef = useRef<TextInput>(null);

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
      
      newPlayerNameInputRef.current?.blur();

      setNewPlayerName('');

      await fetchPlayerByTeam();
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

  async function handleRemovePlayer(playerName: string) {
    try {
      await playerRemoveByGroup(playerName, group);
      fetchPlayerByTeam();
    } catch(error) {
      console.log(error);
      Alert.alert('Remover pessoa', 'Não foi possível remover essa pessoa');
    }
  }

  async function fetchPlayerByTeam() {
    try {
      const playersByTeam = await playerGetByGroupAndTeam(group, team);
      setPlayers(playersByTeam);
    } catch (error) {
      if(error instanceof AppError) {
        Alert.alert('Novo player', error.message);
        console.log(error);
      } else {
        Alert.alert('Novo player', 'Não foi possível carregas as pessoas filtradas no time');
        console.log(error);
      }
    }
  }

  useEffect(() => {
    fetchPlayerByTeam();
  }, [team]);

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
            value={newPlayerName}
            inputRef={newPlayerNameInputRef}
            
            onSubmitEditing={handleAddPlayer}
            returnKeyType="done"
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
          keyExtractor={item => item.name}
          renderItem={({item}) => (
            <PlayerCard 
              name={item.name} 
              onRemove={() => handleRemovePlayer(item.name)}
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