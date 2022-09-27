import { useCallback, useState } from 'react';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { GroupCard } from '@components/GroupCard';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Container } from './styles';
import { FlatList } from 'react-native';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { groupGetAll } from '@storage/group/groupsGetAll';

// type RootParamList = {
//   groups: undefined;
//   new: undefined;
//   players: {
//     group: string;
//   }
// }

// type Props = {
//   navigation: NativeStackNavigationProp<RootParamList, 'groups'>
// }

export function Groups() {
  const [groups, setGroups] = useState<string[]>([]);
  const navigation = useNavigation();

  function handleNewGroup() {
    navigation.navigate('new');
  }

  async function fetchGroups() {
    try {
      const groups = await groupGetAll();
      
      setGroups(groups);
    } catch (error) {
      console.log(error);
    }
  }

  function handleOpenGroup(group: string) {
    navigation.navigate('players',{ group });
  }

  useFocusEffect(useCallback(() => {
    fetchGroups();
  }, []));

  return (
    <Container>
      <Header />

      <Highlight 
        title="Turmas" 
        subtitle="Jogue com a sua turma"
      />

      <FlatList 
        data={groups}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <GroupCard 
            title={item} 
            onPress={() => handleOpenGroup(item)}
          />
        )}
        ListEmptyComponent={() => <ListEmpty message="Que tal cadastrar a primeira turma?" />}
        contentContainerStyle={groups.length === 0 && { flex: 1}}
      />

      <Button 
        text="Criar nova turma"
        onPress={handleNewGroup}
      />
      
    </Container>
  );
}

